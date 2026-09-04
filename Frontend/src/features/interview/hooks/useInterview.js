import { useContext } from "react";
import { InterviewContext } from "../interview.context";
import { generateInterviewReport, getInterviewReportById, getAllInterviewReports} from "../services/interview.api";

export const useInterview = () => {

    const context = useContext(InterviewContext);

    if(!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
    }

    const {loading, setLoading, report, setReport, reports, setReports} = context;

    const generateReport = async({resume, selfDescription, jobDescription}) => {

        setLoading(true);
        let response = null;

        try {
            const response = await generateInterviewReport({resume, selfDescription, jobDescription});
            setReport(response.interviewReport);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        return response.interviewReport;
    };

    const getReportById = async ({interviewId}) => {

        setLoading(true);
        let response = null;

        try {
            const response = await getInterviewReportById(interviewId);
            setReport(response.interviewReport)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        return response.interviewReport;
    };

    const getAllReports = async () => {

        setLoading(true);
        let response = null;

        try {
            const response = getAllInterviewReports();
            setReports(response.interviewReports)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        return response.interviewReports;
    }


    return({loading, report, generateReport, getReportById, reports, getAllReports})
}