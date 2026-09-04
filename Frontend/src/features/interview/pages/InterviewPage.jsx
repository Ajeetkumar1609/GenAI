import "../styles/InterviewPage.css";
import { Code2, MessageCircle, Map } from "lucide-react";

export const Interview = () => {

return (
    <div className="interview-page">
        <div className="interview-page-layout">
            
            {/* Left Navbar */}
            <nav className="interview-nav">
                <div className="nav-content">  

                    <p className="interview-nav-label">
                        Sections
                    </p>

                    <button className="interview-nav-button">
                        <span className='interview-nav-icon'><Code2 size={16} /></span>
                        Technical Questions
                    </button>

                    <button className="interview-nav-button">
                        <span className='interview-nav-icon'><MessageCircle size={16} /></span>
                        Behavioral Questions    
                    </button>
                    
                    <button className="interview-nav-button">
                        <span className='interview-nav-icon'><Map size={16} /></span>
                        Road Map
                    </button>

                </div>

                <button className="button primary-button">
                    Download Resume
                </button>
            </nav>

            {/* Middle Section */}
            <main className="interview-content">
                
                {/* Technical Questions */}

                <section className="interview-section">

                    <div className="content-header">
                        <h2>Technical Questions</h2>
                        <span className="content-header-count">
                            10 Questions
                        </span>
                    </div>

                    <div className="q-lists">
                        
                        <div className="q-card">
                            <div className="q-card-header">
                                <span className="q-card-index">
                                    Q1
                                </span>

                                <p className="q-card-questions">
                                    Technical question goes here
                                </p>

                                <span className="q-card-img">
                                    ↓
                                </span>
                            </div>

                            <div className="q-card-body">

                                <div className="q-card-section">
                                    <span className="q-card-tag intention">
                                        Intention
                                    </span>

                                    <p>
                                        Interviewer intention goes here.
                                    </p>
                                </div>

                                <div className="q-card-section">
                                    <span className="q-card-tag answer">
                                        Model Answer
                                    </span>

                                    <p>
                                        Model answer goes here.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>

                {/* Behavioral Questions */}

                <section className="interview-section">

                    <div className="content-header">
                        <h2>Behavioral Questions</h2>

                        <span className="content-header-count">
                            5 questions
                        </span>
                    </div>

                    <div className="q-list">

                        <div className="q-card">

                            <div className="q-card-header">

                                <span className="q-card-index">
                                    Q1
                                </span>

                                <p className="q-card-question">
                                    Tell me about yourself.
                                </p>

                                <span className="q-card-img">
                                    ↓
                                </span>

                            </div>

                            <div className="q-card-body">

                                <div className="q-card-section">
                                    <span className="q-card-tag intention">
                                        Intention
                                    </span>

                                    <p>
                                        Interviewer intention goes here.
                                    </p>
                                </div>

                                <div className="q-card-section">
                                    <span className="q-card-tag answer">
                                        Model Answer
                                    </span>

                                    <p>
                                        Model answer goes here.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* RoadMap */}

                <section className="interview-section">

                    <div className="content-header">

                        <h2>Preparation Road Map</h2>

                        <span className="content-header-count">
                            7-day plan
                        </span>

                    </div>


                    <div className="roadmap-list">

                        {/* Day 1 */}
                        <div className="roadmap-day">

                            <div className="roadmap-day-header">

                                <span className="roadmap-day-badge">
                                    Day 1
                                </span>

                                <h3 className="roadmap-day-focus">
                                    JavaScript Fundamentals
                                </h3>

                            </div>


                            <ul className="roadmap-day-tasks">

                                <li>
                                    <span className="roadmap-day-bullet"></span>
                                    Revise JavaScript basics
                                </li>

                                <li>
                                    <span className="roadmap-day-bullet"></span>
                                    Practice variables and data types
                                </li>

                                <li>
                                    <span className="roadmap-day-bullet"></span>
                                    Practice functions
                                </li>

                            </ul>

                        </div>

                    </div>

                </section>

            </main>

            {/* Right Sidebar */}
            <aside className="interview-sidebar">
                
                {/* Match Score */}
                <div className="match-score">

                    <p className="match-score-label">
                        Match Score
                    </p>

                    <div className="match-score-ring">
                        <span className="match-score-value">
                            85
                        </span>

                        <span className="match-score-percentage">
                            %
                        </span>
                    </div>

                    <p className="match-score-sub">
                        Strong match for this role
                    </p>

                </div>

                <div className="sidebar-divider" />

                {/* Skill Gaps */}
                <div className="skill-gaps">

                    <p className="skill-gaps-label">
                        Skill Gaps
                    </p>

                    <div className="skill-gaps-lists">
                        <span className="skill-tag">
                            Javascript
                        </span>

                        <span className="skill-tag">
                            React
                        </span>

                        <span className="skill-tag">
                            Node.js
                        </span>
                    </div>

                </div>

            </aside>

        </div>

    </div>
);

}

export default Interview;