import { IconBrandUnity, IconBrain, IconChalkboardTeacher  } from '@tabler/icons-react';
import './styles/Work.css';

export default function Work() {
  return (
    <div className="work-container">
        <h1 className="work-title">Work Experience</h1>
        <div className="work-item">
            <IconBrandUnity 
                className="work-icon unity-icon"
            />
            <div className="divider" />
            <div className="work-details">
                <div className="work-details-text">
                    <h1 className="job-title">Junior Programmer</h1>
                    <ul className="job-description">
                        <li>
                            Develop a mobile app using Unity and C# to capture the user&apos;s response and calculate their response time when presented with a visual stimulus
                        </li>
                        <li>
                            I wrote technical documentation on the app detailing the code architecture and Unity components for future engineers
                        </li>
                        <li>
                            I also worked on developing a Unity plugin that helps users generate character animation using an AI-powered audio prompt
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="work-item">
            <IconBrain 
                className="work-icon brain-icon"
            />
            <div className="divider" />
            <div className="work-details">
                <div className="work-details-text">
                    <h1 className="job-title">Software Engineer</h1>
                    <ul className="job-description">
                        <li>
                            Contributed to a Brain-Computer Interface Project for Stroke Rehabilitation using a Machine Learning model
                        </li>
                        <li>
                            Developed a Recurrent Neural Network, along with other Machine Learning models for classifying brain waves
                        </li>
                        <li>
                            Implemented baseline correction as a data-cleaning method to process and improve data quality for analysis
                        </li>
                        <li>
                            Designed and implemented a Maze mini-game using Python to allow patients to interact with the game using the Brain-Computer Interface System
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="work-item">
            <IconChalkboardTeacher 
                className="work-icon teacher-icon"
            />
            <div className="divider" />
            <div className="work-details">
                <div className="work-details-text">
                    <h1 className="job-title">Teaching Assistant</h1>
                    <ul className="job-description">
                        <li>
                            TA&apos;d for the course Java (Object Oriented Programming), Computer Mathematics, and front-end web development using HTML, CSS, and JavaScript
                        </li>
                        <li>
                            Assisted students in those courses by answering students&apos; questions during lectures, group reviews, and one-on-one sessions; hosted tutorials reviewing course concepts
                        </li>
                        <li>
                            Contributed to updating a Time-Management LibGuide on the official Sheridan College website by adding new content and utilizing HTML to add new functionality
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}
