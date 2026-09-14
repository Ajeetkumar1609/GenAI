import { Sparkles } from "lucide-react";
import "./Loader.css";

const Loader = ({ title = "Loading...", message = "Please wait while we load your data." }) => {
    return (
        <main className="interview-loading">
            <div className="loading-glow"></div>

            <div className="loading-content">
                <span className="loading-icon">
                    <Sparkles size={24} />
                </span>
                <h1>{title}</h1>
                <p>{message}</p>
            </div>
        </main>
    )
}

export default Loader;
