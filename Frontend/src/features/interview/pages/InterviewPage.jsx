import { useState } from "react";
import "../styles/InterviewPage.css";
import { Code2, MessageCircle, Map } from "lucide-react";
import { useInterview } from "../hooks/useInterview";


// Sub Component

const QuestionCard = ({item, index}) => {

    const [open, setOpen] = useState(false);

    return(
        <div className="q-card">
            <div className="q-card-header" onClick={() => setOpen(o => !o)}>
                <span className="q-card-index">
                    Q{index+1}
                </span>

                <p className="q-card-questions">
                    {item.question}
                </p>

                <span className="q-card-img">
                    ↓
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

            <div className="roadmap-day-header">
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

    const [activeSection, setActiveSection] = useState("technical");
    const {report, loading} = useInterview();

    if(loading || !report) {
        return (
            <main className="auth-page">
                <h1>Loading your interview plan...</h1>
            </main>
        )
    }

    const scoreColor = report.matchScore >= 80 ? "score-high": report.matchScore >= 60 ? "score-mid" : 'score-low'

return (
    <div className="interview-page">
        <div className="interview-page-layout">
            
            {/* Left Navbar */}
            <nav className="interview-nav">
                <div className="nav-content">  

                    <p className="interview-nav-label">
                        Sections
                    </p>

                    <button
                        className={`interview-nav-button ${activeSection === "technical" ? "active" : ""}`} 
                        onClick={() => setActiveSection("technical")}>
                        <span className='interview-nav-icon'><Code2 size={16} /></span>
                        Technical Questions
                    </button>

                    <button 
                        className={`interview-nav-button ${activeSection === "behavioral" ? "active" : ""}`}
                        onClick={() => setActiveSection("behavioral")}>
                        <span className='interview-nav-icon'><MessageCircle size={16} /></span>
                        Behavioral Questions    
                    </button>
                    
                    <button 
                        className={`interview-nav-button ${activeSection === "roadmap" ? "active" : ""}`}
                        onClick={() => setActiveSection("roadmap")}>
                        <span className='interview-nav-icon'><Map size={16} /></span>
                        Road Map
                    </button>

                </div>

                <button className="button">
                    Download Resume
                </button>
            </nav>

            {/* Middle Section */}
            <main className="interview-content">
                
                {/* Technical Questions */}

                {activeSection === "technical" && (
                    <section className="interview-section">

                        <div className="content-header">
                            <h2>Technical Questions</h2>
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
                            <h2>Behavioral Questions</h2>

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
                            <h2>Preparation Road Map</h2>

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
                
                {/* Match Score */}
                <div className="match-score">

                    <p className="match-score-label">Match Score</p>

                    <div className={`match-score-ring ${scoreColor}`}>
                        <span className="match-score-value">
                            {report.matchScore}
                        </span>

                        <span className="match-score-percentage">%</span>
                    </div>

                    <p className="match-score-sub">
                        Strong match for this role
                    </p>

                </div>

                <div className="sidebar-divider" />

                {/* Skill Gaps */}
                <div className="skill-gaps">

                    <p className="skill-gaps-label">Skill Gaps</p>

                    <div className="skill-gaps-lists">
                        
                        {report.skillGaps.map((gap, i) => (
                            <span key={i} className={`skill-tag skill-tag-${gap.severity}`}>
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