import axios from "axios";

export const register = async (user) => {
    try {
        const response = await axios.post('/auth/register', JSON.stringify({
            data:{
                "firstName": user.firstName,
                "lastName": user.lastName,
                "email": user.email,
                "password": user.pwd,
                "confirmPassword": user.confPwd,
                "address": user.addr,
                "phoneNumber": user.phoneNumber,
                "role": user.userType,
                "dob": user.dob,
                "gender": user.gender === 'Female' ? 'F' : user.gender === 'Male' ? 'M' : 'O',
                "education": user.education,
                "facts": user.facts,
            }
        }), { headers: { "Content-Type": "application/json" } })
        if (response && response.data) {
            return await response.data;
        }
    }
    catch (error) {
        if (error && error.response && error.response.data) {
            return await error.response.data;
        }
    }
}

export const loginUser = async (user) => {
    try {
        const response = await axios.post('/auth/login', JSON.stringify({
            email: user.email,
            password: user.pwd
        }), { headers: { "Content-Type": "application/json" } })
        if (response && response.data) {
            return await response.data;
        }
    }
    catch (error) {
        if (error && error.response && error.response.data) {
            return await error.response;
        }
    }
}

export const addCourse = async (course_id, user_id, token) => {
    try {
        const response = await axios.put(`/courses/${course_id}/add/${user_id}`, 
         { headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"}})
        if (response && response.status) {
            return await response.status;
        }
    }
    catch (error) {
        if (error && error.response && error.response.data) {
            return await error.response.data;
        }
    }
}

export const addAssignment = async (assignment, user_id, token) => {
    try {
        const response = await axios.put(`/users/${user_id}/assignment`, {
            name: assignment.name,
            desc: assignment.desc,
            due: assignment.due,
            points: assignment.points,
            submitted: false,
            subDate: 'NA',
            grade: 'NA'
        },
         { headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"}})
        if (response && response.status) {
            return await response.status;
        }
    }
    catch (error) {
        if (error && error.response && error.response.data) {
            return await error.response.data;
        }
    }
}

export const getUser = async (email, token) => {
    try {
        const response = await axios({
        method: "GET",
        url: `/users/${email}`,
        headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"}
    })
    if (response && response.data) {
        return await response.data;
    }
}
catch (error) {
    if (error && error.response && error.response.data) {
        return await error.response.data;
    }
}
}

export const getAllCourses = async(token) => {
    try {
        const response = await axios.get("/courses/all")
    if (response && response.data) {
        return response.data;
    }
}
catch (error) {
    if (error && error.response && error.response.data) {
        return error.response.data;
    }
}
}

export const getUserCourse = async (user_id, token) => {
    try {
        const response = await axios({
        method: "GET",
        url: `/users/${user_id}/courses`,
        headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"}
    })
    if (response && response.data) {
        return await response.data
    }
}
catch (error) {
    if (error && error.response && error.response.data) {
        return await error.response.data;
    }
}
}