import { useRef, useState } from 'react';
import { useInterview } from '../hooks/useInterview';
import { useAuth } from '../../auth/hooks/useAuth';
import { BriefcaseBusiness, CloudUpload, UserRound, CircleAlert, Sparkles, LayoutDashboard, FileText, ClipboardList, CheckCircle2, ArrowRight, CalendarDays, LogOut  } from "lucide-react";
import '../styles/HomePage.css';
import { useNavigate } from 'react-router';

export const Home = () => {

    const navigate = useNavigate();

    const {loading, generateReport, reports} = useInterview();
    const {handleLogout, user} = useAuth();

    const [jobDescription, setJobDescription] = useState("");
    const [selfDescription, setSelfDescription] = useState("");

    const resumeInputRef = useRef();

    const handleGenerateReport = async () => {
        const resumeFile = resumeInputRef.current.files[0];
        const data = await generateReport({resumeFile, selfDescription, jobDescription});
        navigate(`/report/${data._id}`)
    };

    if(loading) {
        return (
            <main className="interview-loading">
                <div className="loading-glow"></div>

                <div className="loading-content">
                    <span className="loading-icon">
                        <Sparkles size={24} />
                    </span>
                    <h1>Building your interview plan...</h1>
                    <p>
                        We're preparing your personalized interview strategy.
                    </p>
                </div>
            </main>
        )
    }
   
    return(
        <div className="home-page">

            {/* HEADER */}

            <header className="app-header">
                <div className='logo' onClick={() => navigate("/")}>
                    <span className='logo-icon'><Sparkles size={18} /></span>
                    Interview<span className='logo-highlight'>AI</span>
                </div>

                {/* Navigation */}

                <nav className="nav-menu">
                    <button className="nav-link active" onClick={() => navigate("/")}>
                        <LayoutDashboard size={17} />
                        Home
                    </button>

                    <button className="nav-link"
                        onClick={() => {
                            document.getElementById("recent-plans")?.scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        <ClipboardList size={17} />
                        My Plans
                    </button>
                </nav>

                {/* Header Actions */}

                <div className="header-actions">
                    <div className="user-profile">
                        <div className="user-avatar"> {user?.username?.charAt(0)} </div>
                        <span className="user-name"> {user?.username} </span>
                    </div>

                    <button className="logout-btn" onClick={handleLogout}><LogOut size={16} />Logout</button>
                </div>
            </header>
            
            {/* MAIN CONTENT */}

            <main className='main-content'>

                {/* Hero Section */}

                <section className="hero-section">
                    <div className="hero-content">
                        <div className="hero-greeting">👋 Hello, {user?.username}</div>
                        <h1>Prepare Smarter, <span className='highlight'>Interview Better</span></h1>
                         <p>Tell us about the role and your experience. We'll build a personalized interview strategy to help you walk into your next interview with confidence.</p>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-glow"></div>

                        <div className="hero-icon">
                            <Sparkles size={55} />
                        </div>

                        <div className="floating-code">
                            &lt;/&gt;
                        </div>
                    </div>
                </section>

                {/* Interview Builder */}

                <section className='interview-builder'>

                    {/* Role */}

                    <div className="builder-panel role-panel">
                        <div className="panel-heading">

                            <div className="step-number"> 1 </div>
                                
                            <div className="panel-icon role-icon"><BriefcaseBusiness size={18} /></div>

                            <div className="panel-heading-text">
                                <h2> Role You're Applying For</h2>
                                <p>Paste the job description or key requirements.</p>
                            </div>

                        </div>

                        <div className="form-group">
                            <textarea
                                value={jobDescription}
                                onChange={(e)=> {setJobDescription(e.target.value)}}
                                // className="panel-textarea"
                                id="job-description"
                                name="jobDescription"
                                placeholder="Enter your job description here..."
                                maxLength={5000}
                            />

                            <div className="character-count">{jobDescription.length} / 5000 chars</div>
                        </div>
                        
                    </div>

                    {/* Profile */}

                    <div className="builder-panel profile-panel">

                        <div className="panel-heading">

                            <div className="step-number"> 2 </div>

                            <div className="panel-icon profile-icon"><UserRound size={18} /></div>

                            <div className="panel-heading-text">
                                <h2>Your Profile</h2>
                                <p>Add your resume or tell us about yourself.</p>
                            </div>

                        </div>
                    
                        {/* Resume */}

                        <div className="resume-section">
                            <div className="section-label">                          
                                <label className='resume-label'>
                                    <FileText size={15} /> Upload Your Resume
                                </label>
                            </div>

                            <label className='upload-box' htmlFor="resume">
                                <CloudUpload className="upload-icon" size={32} />
                                <strong>Upload Your Resume</strong>
                                <span>Drag & drop or click to browse</span>
                                <small>PDF or DOCX • Max 5MB</small>

                                <input
                                    ref={resumeInputRef}
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.docx"
                                    hidden
                                />
                            </label>
                        </div>

                        {/* OR */}

                        <div className="or-divider">
                            <span>OR</span>
                        </div>

                        {/* Self Description */}

                        <div className="self-description">
                            <label className="section-label" htmlFor="selfDescription"><UserRound size={15} /> Tell Us About Yourself</label>
                            <textarea
                                value={selfDescription}
                                onChange={(e)=>{setSelfDescription(e.target.value)}}
                                id='selfDescription'
                                name='selfDescription'
                                maxLength={1000}
                                placeholder="Share your experience, strongest skills, and what you bring to the role..."
                            />
                            
                            <div className="character-count">
                                {selfDescription.length} / 1000
                            </div>

                            {/* Info Box */}
                            <div className='info-box'>
                                <span className="panel-iconn">
                                    <CircleAlert  size={18} />
                                </span>
                                <p>Either a <strong>Resume</strong> or a <strong>Self Description</strong> is required to generate a personalized plan.</p>
                            </div>
                                
                        </div>
                    </ div>

                    {/* AI Features */}

                    <div className="builder-panel ai-panel">

                        <div className="panel-heading">

                            <div className="step-number"> 3</div>
                            <div className="panel-icon ai-icon"><Sparkles size={18} /></div>
                            <div className="panel-heading-text">
                                <h2> What You'll Get</h2>
                                <p>AI-powered insights built around your profile.</p>
                            </div>

                        </div>


                        <div className="ai-features">

                            {/* Technical */}
                            <div className="feature-item">
                                <div className="feature-check"><CheckCircle2 size={19} /></div>

                                <div>
                                    <h3>Technical Questions</h3>
                                    <p>Role-focused technical questions</p>
                                </div>
                            </div>

                            {/* Behavioral */}
                            <div className="feature-item">
                                <div className="feature-check"><CheckCircle2 size={19} /></div>

                                <div>
                                    <h3> Behavioral Questions</h3>
                                    <p>Questions based on your experience</p>
                                </div>
                            </div>

                            {/* Skill Gaps */}
                            <div className="feature-item">
                                <div className="feature-check"><CheckCircle2 size={19} /></div>

                                <div>
                                    <h3>Skill Gap Analysis</h3>
                                    <p>Discover what you need to improve</p>
                                </div>
                            </div>

                            {/* Roadmap */}
                            <div className="feature-item">
                                <div className="feature-check"><CheckCircle2 size={19} /></div>

                                <div>
                                    <h3>Personalized Roadmap</h3>
                                    <p>A focused day-by-day preparation plan</p>
                                </div>
                            </div>

                            {/* ATS Friendly Resume */}
                            <div className="feature-item">
                                <div className="feature-check"><CheckCircle2 size={19} /></div>

                                <div>
                                    <h3>Resume</h3>
                                    <p>ATS Friendly Resume</p>
                                </div>
                            </div>

                        </div>
     
                        <button onClick={handleGenerateReport} className='generate-btn'>
                            <Sparkles size={18} />
                            Build My Interview Plan
                            <ArrowRight size={18} />
                        </button>
                
                    </div>
                </section>

                {/* Recent Reports List */}
                {reports && reports.length > 0 && (
                    <section id="recent-plans" className='recent-plans'>
                        
                        <div className="section-header">
                            <div className="section-title">
                                <div className="section-title-icon"><ClipboardList size={21} /></div>

                                <div>
                                    <h2>My Recent Interview Plans</h2>
                                    <p>Review your previous plans and track your interview preparation.</p>
                                </div>
                            </div>
                        </div>

                        {/* Reports Grid */}

                        <div className='plans-grid'>
                            {reports.map(report => (
                                <article key={report._id} className="plan-card">

                                    {/* Card Top */}
                                    <div className="plan-card-top">
                                        <div className="plan-info">
                                            <h3>{report.title || "Interview Plan"}</h3>
                                        </div>

                                        <div className={`match-score ${ report.matchScore >= 80 ? "score-high" 
                                                : report.matchScore >= 60 ? "score-mid"
                                                : "score-low" }`}
                                        >
                                            <span>Match</span>
                                            <strong>{report.matchScore}%</strong>
                                        </div>
                                    </div>

                                    {/* Card Bottom */}
                                    <div className="plan-card-bottom">
                                        <span className="plan-date">
                                            <CalendarDays size={15} />
                                            {new Date( report.createdAt ).toLocaleDateString()}
                                        </span>

                                        <button className="view-report-btn" onClick={() => navigate(`/report/${report._id}`)} >
                                            View Report
                                            <ArrowRight size={15} />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* Page Footer */}
            <footer className="app-footer">
                <span>© 2026 InterviewAI</span>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Services</a>
                <a href="#">Help Center</a>
            </footer>
        </div>
    )
}


export default Home;