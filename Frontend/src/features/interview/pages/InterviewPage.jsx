import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useAuth } from "../../auth/hooks/useAuth";
import { Code2, MessageCircle, Map, Sparkles, ChevronDown, ArrowLeft, Download, LogOut, Target, AlertTriangle} from "lucide-react";
import { useInterview } from "../hooks/useInterview";
import "../styles/InterviewPage.css";


// Sub Component

const QuestionCard = ({item, index}) => {

    const [open, setOpen] = useState(false);

    return(
        <div className="q-card">
            <div className="q-card-header" onClick={() => setOpen((value) => !value)}>
                <span className="q-card-index">
                    Q{index+1}
                </span>

                <p className="q-card-questions">
                    {item.question}
                </p>

                <span className={`q-card-icon ${open ? "open" : ""}`}>
                    <ChevronDown size={18} />
                </span>
            </div>

            {open && (
                <div className="q-card-body">

                    <div className="q-card-section">
                        <span className="q-card-tag intention">
                            Intention
                        </span>

                        <p>
                            {item.intention}
                        </p>
                    </div>

                    <div className="q-card-section">
                        <span className="q-card-tag answer">
                            Model Answer
                        </span>

                        <p>
                            {item.answer}
                        </p>
                    </div>

                </div>
            )}
        </div>
    );
};

const RoadMapDay = ({day}) => {
    return(
        <div className="roadmap-day">

            <div className="roadmap-day-top">
                <span className="roadmap-day-badge">
                    Day {day.day}
                </span>

                <h3 className="roadmap-day-focus">
                    {day.focus}
                </h3>
            </div>


            <ul className="roadmap-day-tasks">
                {day.tasks.map((task, i) => (
                    <li key={i}>
                        <span className="roadmap-day-bullet"></span>
                        {task}
                    </li>
                ))}
            </ul>

        </div>
    );
}


// Main Component

export const Interview = () => {

    const navigate = useNavigate();

    const {handleLogout, user} = useAuth();

    const [activeSection, setActiveSection] = useState("technical");
    const {report, loading, getResumePdf} = useInterview();
    const {interviewId} = useParams();

    if(loading || !report) {
        return (
            <main className="interview-loading">
                <div className="loading-glow"></div>

                <div className="loading-content">
                    <span className="loading-icon">
                        <Sparkles size={24} />
                    </span>
                    <h1>Loading your interview plan...</h1>
                    <p>
                        We're preparing your personalized interview strategy.
                    </p>
                </div>
            </main>
        )
    }

    const scoreColor = report.matchScore >= 80 ? "score-high": report.matchScore >= 60 ? "score-mid" : 'score-low'

    return (
        <div className="interview-page">

        {/* HEADER */}

            <header className="app-header">
                <div className='logo' onClick={() => navigate("/")}>
                    <span className='logo-icon'><Sparkles size={18} /></span>
                    <span>
                        Interview<span className='logo-highlight'>AI</span>
                    </span>
                </div>

                {/* Header Actions */}

                <div className="header-actions">

                    <button className="nav-link" onClick={() => navigate("/")}>
                        <ArrowLeft size={16} />
                        Home
                    </button>

                    <div className="user-profile">
                        <div className="user-avatar"> {user?.username?.charAt(0)} </div>
                        <span className="user-name"> {user?.username} </span>
                    </div>

                    <button className="logout-btn" onClick={handleLogout}><LogOut size={16} />Logout</button>

                </div>
            </header>

            {/* PAGE INTRO */}

            <div className="interview-intro">
                <div className="intro-badge">
                    <Sparkles size={14} />
                    Your Personalized Interview Plan
                </div>

                <h1>
                    Prepare Smarter,
                    <span> Interview Better </span>
                </h1>

                <p>
                    Review your personalized questions, identify skill gaps, and follow your preparation roadmap to walk into your next interview with confidence.
                </p>
            </div>

            {/* MAIN LAYOUT */}

            <div className="interview-page-layout">
                
                {/* Left Navbar */}
                <nav className="interview-nav">
                    <div className="nav-content">  

                        <div className="interview-nav-heading">
                            <span>Interview Plan</span>
                        </div>

                        <p className="interview-nav-label">
                            Sections
                        </p>

                        <button
                            className={`interview-nav-button ${activeSection === "technical" ? "active" : ""}`} 
                            onClick={() => setActiveSection("technical")}>
                            <span className='interview-nav-icon'><Code2 size={17} /></span>
                            <span className="nav-button-text">
                                Technical Questions
                            </span>
                        </button>

                        <button 
                            className={`interview-nav-button ${activeSection === "behavioral" ? "active" : ""}`}
                            onClick={() => setActiveSection("behavioral")}>
                            <span className='interview-nav-icon'><MessageCircle size={16} /></span>
                            <span className="nav-button-text">
                                Behavioral Questions
                            </span>
                        </button>
                        
                        <button 
                            className={`interview-nav-button ${activeSection === "roadmap" ? "active" : ""}`}
                            onClick={() => setActiveSection("roadmap")}>
                            <span className='interview-nav-icon'><Map size={16} /></span>
                            <span className="nav-button-text">
                                RoadMap
                            </span>
                        </button>

                    </div>

                    <button className="download-resume-btn" onClick={() => {getResumePdf(interviewId)}}>
                        <Download size={16} />
                        <span>Download Resume</span>
                    </button>
                </nav>

                {/* Middle Section */}
                <main className="interview-content">
                    
                    {/* Technical Questions */}

                    {activeSection === "technical" && (
                        <section className="interview-section">

                            <div className="content-header">

                                <div className="content-title-wrapper">
                                    <div className="content-title-icon technical-icon">
                                            <Code2 size={19} />
                                    </div>

                                    <div>
                                        <h2>Technical Questions</h2>
                                        <p>Role-foucesd questions based on your profile</p>
                                    </div>        
                                </div>

                                <span className="content-header-count">
                                    {report.technicalQuestions.length} questions
                                </span>

                            </div>

                            <div className="q-lists">                         
                                {report.technicalQuestions.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}
                            </div>

                        </section>
                    )}

                    {/* Behavioral Questions */}

                    {activeSection === "behavioral" && (
                        <section className="interview-section">

                            <div className="content-header">

                                <div className="content-title-wrapper">
                                    <div className="content-title-icon behavioral-icon">
                                            <MessageCircle size={19} />
                                    </div>

                                    <div>
                                        <h2>Behavioral Questions</h2>
                                        <p>Questions designed around your experience</p>
                                    </div>        
                                </div>          

                                <span className="content-header-count">
                                    {report.behavioralQuestions.length} questions
                                </span>
                            </div>

                            <div className="q-lists">                         
                                {report.behavioralQuestions.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}
                            </div>

                        </section>
                    )}

                    {/* RoadMap */}

                    {activeSection === "roadmap" && (
                        <section className="interview-section">

                            <div className="content-header">
                                <div className="content-title-wrapper">
                                    <div className="content-title-icon roadmap-icon">
                                            <Map size={19} />
                                    </div>

                                    <div>
                                        <h2>Technical Questions</h2>
                                        <p>Follow your personalized preparation plan.</p>
                                    </div>        
                                </div>

                                <span className="content-header-count">
                                    {report.preparationPlan.length}-day plan
                                </span>
                            </div>


                            <div className='roadmap-list'>
                                {report.preparationPlan.map((day) => (
                                    <RoadMapDay key={day.day} day={day} />
                                ))}
                            </div>

                        </section>
                    )}

                </main>

                {/* Right Sidebar */}
                <aside className="interview-sidebar">
                    
                    {/* Candidate Overview */}
                    <div className="sidebar-card candidate-card">

                        <div className="sidebar-card-heading">
                            <div className="sidebar-heading-icon">
                                <Target size={19} />
                            </div>

                            <div>
                                <span>Candidate Overview</span>
                                <small>Role compatitbility</small>
                            </div>
                        </div>

                        <div className={`match-score-ring ${scoreColor}`}>
                            
                            <div className="match-score-inner">
                                <span className="match-score-value">
                                    {report.matchScore}
                                </span>

                                <span className="match-score-percentage">%</span>
                            </div>

                        </ div>

                        <div className="match-score-result">
                            <span className="result-dot"></span>

                            <strong>
                                {report.matchScore >= 80 ? "Strong Match" : report.matchScore >= 60 ? "Good Match" : "Needs Improvement"}
                            </strong>
                        </div>

                        <p className="match-score-sub">
                            Your profile shows a {" "}
                            {report.matchScore >= 80 ? "strong" : report.matchScore >= 60 ? "good" : "developing"} {" "}
                            match for this role.
                        </p>

                    </div>

                    <div className="sidebar-divider" />

                    {/* Skill Gaps */}
                    <div className="skill-gaps">

                        <div className="sidebar-section-title">
                            <div className="sidebar-heading-icon warning-icon">
                                <AlertTriangle size={19} />
                            </div>

                            <div>
                                <span>Skill Gaps</span>
                                <small>Areas to strengthen</small>
                            </div>
                        </div>

                        <div className="skill-gaps-lists">
                            
                            {report.skillGaps.map((gap, i) => (
                                <span key={i} className={`skill-tag skill-tag-${gap.severity}`}>
                                    <span className="skill-tag-dot"></span>
                                    {gap.skill}
                                </span>
                            ))}

                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );

}

export default Interview;
