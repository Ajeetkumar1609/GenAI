import '../styles/HomePage.css';
import { BriefcaseBusiness, CloudUpload, UserRound, CircleAlert   } from "lucide-react";


export const Home = () => {

    return(
        <div className="home-page">
            
            {/* Page Header */}
            <header className="page-header">
                <h1>Create Your Custom <span className='highlight'>Interview Plan</span></h1>
                <p>Let AI review your resume, skills, and the job requirement to build a strategy made just for you.</p>
            </header>

            {/* Main Card */}
            <div className="interview-card">
                <div className="interview-card-body">

                    {/*Left Panel*/}
                    <div className="left-panel">
                        <div className="panel-header">
                            <span className="panel-icon">
                                <BriefcaseBusiness size={18} />
                            </span>
                            <h2>Target Job description</h2>
                            <span className="badge badge-best">Required</span>
                        </div>

                        <textarea
                            className="panel-textarea"
                            id="job-description"
                            name="jobDescription"
                            placeholder="Enter your job description here..."
                            maxLength={5000}
                        />

                        <div className="char-counter">0 / 5000 chars</div>
                    </div>

                    {/*RightPanel - Profile*/}
                    <div className="panel right-panel">
                        <div className="profile-header">
                            <span className="panel-icon">
                                <UserRound  size={20} />
                            </span>
                            <h2>Your Profile</h2>
                        </div>

                         {/* Upload Resume */}
                        <div className="upload-section">
                            <label className="section-label">
                                Upload Resume
                                <span className="badge badge-best">Best Results</span>    
                            </label>

                            <label className="dropzone" htmlFor="resume">
                                <span className="panel-icon">
                                    <CloudUpload size={24} />
                                </span>
                                <p className="">Click to upload or drag &amp; drop</p>
                                <p className="">PDF or DOCX (Max 5MB)</p>
                                <input hidden type="file" id="resume" name="resume" accept=".pdf,.docx" />
                            </label>
                        </div>

                        {/* Quick Self-Description */}
                        <div className="self-description">
                            <label className="section-label" htmlFor="selfDescription">Quick Self-Description</label>
                            <textarea
                               
                                id='selfDescription'
                                name='selfDescription'
                                className='panel-textarea panel__textarea--short'
                                placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                            />
                        </div>

                        {/* Info Box */}
                        <div className='info-box'>
                            <span className="panel-iconn">
                                <CircleAlert  size={18} />
                            </span>
                            <p>Either a <strong>Resume</strong> or a <strong>Self Description</strong> is required to generate a personalized plan.</p>
                        </div>
                    </div>
                </div>

                {/* Card Footer */}
                <div className='interview-card-footer'>
                    <span className='footer-info'>AI-Powered Strategy Generation &bull; Approx 30s</span>
                    <button
                        className='generate-btn'
                    >
                        Generate My Interview Strategy
                    </button>
                </div>
            </div>

            {/* Recent Reports List */}


            {/* Page Footer */}
            <footer className="page-footer">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Services</a>
                <a href="#">Help Center</a>
            </footer>
        </div>
    )
}

export default Home;