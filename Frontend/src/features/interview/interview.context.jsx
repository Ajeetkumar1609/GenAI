import {useState, createContext} from 'react';

export const InterviewContext = createContext();

export const InterviewPovider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState(null);
    const [reports, setReports] = useState(null);

    return(
        <InterviewContext.Provider value ={{loading, setLoading, report, setReport, reports, setReports}}>
            {children}
        </InterviewContext.Provider>
    );
}