import React from 'react';
import Main from '../components/Main';
import courseList from '../data/courseList';
import Course from '../components/Course';

const Deliverable = () => {
    return (
        <h1>This is Instructor Deliverables Tab</h1>
    )
}

const CourseInstructor = (props) => {
    const { courseId } = props || '';
    const [myCourse] = React.useState(courseList.filter(el => {
        return courseId.some(cid => {
            return cid === el.id
        });
    }))

    return (
        <Main
            title="CourseInstructor"
            description="This page displays list of courses you are teaching"
            userType={props.userType}
        >
            <Course myCourse={myCourse} deliverable={<Deliverable />} />
        </Main>
    )
}

export default CourseInstructor;