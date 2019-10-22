import { createConnection } from 'typeorm';
import * as path from 'path';
import Student from './models/Student';
import Course from './models/Course';

(async() => {
    const conn = await createConnection({
        name: 'default',
        type: 'postgres',
        database: 'postgres',
        schema: 'public',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        synchronize: true,
        dropSchema: true,
        logging: true,
        entities: [path.join(__dirname, './models/**/*')]
    });

    // Fill tables with data
    const newStudent = new Student();
    await newStudent.save();
    const newCourse = new Course();
    await newCourse.save();

    // Create relation between existing entities
    const student = new Student();
    student.id = 1;
    const course = new Course();
    course.id = 1;

    student.courses = [course];

    await student.save();
})();
