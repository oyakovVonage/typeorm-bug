import { Entity, BaseEntity, ManyToMany, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Course from "./Course";
import StudentToCourse from "./StudentToCourse";

@Entity('students')
export default class Student extends BaseEntity {
	@PrimaryGeneratedColumn({
		name: 'student_id'
	})
	id: number;

	@ManyToMany(type => Course)
	@JoinTable({
		name: 'students_to_courses',
		joinColumn: { name: 'student_id' },
		inverseJoinColumn: { name: 'course_id' }
	})
	courses: Course[];

	@OneToMany(type => StudentToCourse, stc => stc.studentID)
	studentToCourses: StudentToCourse[];
}