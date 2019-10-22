import { PrimaryColumn, Entity, BaseEntity } from "typeorm";

@Entity('students_to_courses')
export default class StudentToCourse extends BaseEntity {
	@PrimaryColumn({
		name: 'student_id'
	})
	studentID: number;

	@PrimaryColumn({
		name: 'course_id'
	})
	courseID: number;
}