import { Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity('courses')
export default class Course extends BaseEntity {
	@PrimaryGeneratedColumn({
		name: 'course_id'
	})
	id: number;
}