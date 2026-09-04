import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
});

/**
 * @description Service to generate interview report based on user self description, resume and job description.
 */

export async function generateInterviewReport({resumeFile, selfDescription, jobDescription}) {

    const formData = new FormData()
    formData.append("jobDescription", jobDescription),
    formData.append("selfDescription", selfDescription),
    formData.append("resume", resumeFile)

    try{
        const response = await api.post("/api/interview/", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });;

    return response.data;

    } catch(error){
        console.log(error);
    }
}

/**
 * @description Service to get interview report by interviewId.
 */
export async function getInterviewReportById(interviewId)  {
    try {
        const response = await api.get(`/api/interview/${interviewId}`);

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

/**
 * @description Service to get all interview reports of logged in user.
 */
export async function getAllInterviewReports () {
    try {
        const response = await api.get("/api/interview/");

        return response.data;

    } catch (error) {
        console.log(error)
    }
}