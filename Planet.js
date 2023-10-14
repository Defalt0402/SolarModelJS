class Planet {
	constructor(x, y, radius, colour, mass, num){
        this.num = num;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.mass = mass;

        this.colour = colour;
        
		this.sun = false;
		this.distance_to_sun = 0;

		this.x_vel = 0;
		this.y_vel = 0;
    }

	drawPlanet() {
		let x = this.x * SCALE_DISTANCE + WIDTH / 2;
		let y = this.y * SCALE_DISTANCE + HEIGHT / 2;
        
        /*
		if (this.orbit.length > 2) {
			let index = 0;
			let updated_points = [];
			for (let point in this.orbit)
				if (updated_points.length >= 100){
					for (let i = 0; i < 100; i++) {
						updated_points[i] = updated_points[i + 1];
                    }
					x, y = point;
					x = x * SCALE_DISTANCE + WIDTH / 2;
					y = y * SCALE_DISTANCE + HEIGHT / 2;
					updated_points[99] = (x, y);
                } else {
					x, y = point;
					x = x * SCALE_DISTANCE + WIDTH / 2;
					y = y * SCALE_DISTANCE + HEIGHT / 2;
					updated_points.push((x, y));
                }

			//pygame.draw.lines(WIN, self.color, False, updated_points, 2)
        }
        */

        push();
        fill(this.colour[0], this.colour[1], this.colour[2]);
        circle(x, y, this.radius);
        pop();
            
        
        if (!this.sun){
            push();
            let dist = ((this.distance_to_sun/1000).toFixed(1)).toString();
            dist += "km";
            textAlign(CENTER, CENTER);
            text(dist, x, y - 10);
            pop();
        }
    }

	attraction(other) {
		let other_x = other.x; 
        let other_y = other.y;
        let distance_x = other_x - this.x;
		let distance_y = other_y - this.y;
		let distance = sqrt(distance_x ** 2 + distance_y ** 2)


		if (other.sun) {
			this.distance_to_sun = distance;
        }

		let force = G * this.mass * other.mass / distance**2;
		let theta = atan2(distance_y, distance_x);
		let force_x = cos(theta) * force;
		let force_y = sin(theta) * force;
		return [force_x, force_y];
    }

	update(bodies){
		let total_fx = 0;
        let total_fy = 0;
		for (let other of bodies) {
            if (other.num == this.num) {
                continue;
            }
			var f = this.attraction(other);
            total_fx += f[0];
            total_fy += f[1];
        }
		this.x_vel += total_fx / this.mass * SCALE_TIME;
		this.y_vel += total_fy / this.mass * SCALE_TIME;

		this.x += this.x_vel * SCALE_TIME;
		this.y += this.y_vel * SCALE_TIME;
		//this.orbit.push((this.x, this.y));
    }

}