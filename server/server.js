const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { OpenAI } = require("openai");
const DESCRIPTION = require('./description.js');

const _dirname = path.dirname('');
const buildPath = path.join(_dirname, '../build');
// const BASE_URL = '/';
const BASE_URL = 'http://localhost:3000';

app.use(express.static(buildPath));

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
});

app.use(express.json());
app.use(cors({
    origin: BASE_URL,
    credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: false }));

/**
 * GET Request when the user finds the status of the server
 */
app.get('/api/status', (req, res) => {
    res.status(200).send('The server is running');
});

/**
 * Get the chatbot response from OpenAI
 */
app.post('/api/openai', async (req, res) => {
    const input = req.body.text;
    const response = await createChatCompletion(input);
    res.send(response);
});

async function createChatCompletion (input) {
    let reply = "";

    await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": DESCRIPTION
            },
            {
                "role": "user",
                "content": "Tell me about Kevin's GPA."
            },
            {
                "role": "assistant",
                "content": "Kevin's overall GPA is 3.86 out of 4."
            },
            {
                "role": "user",
                "content": "Tell me about Kevin's Education."
            },
            {
                "role": "assistant",
                "content": "Kevin is a recent graduate of Sheridan College. His program of study is Computer Engineering Technology, Advanced Diploma."
            },
            {
                "role": "user",
                "content": "Tell me about Kevin's work experience."
            },
            {
                "role": "assistant",
                "content": "Kevin completed three Co-op work terms, with the most recent being a Junior Programmer (Co-op) at SIRT (Screen Industries Research and Training Centre) during Winter 2024. Prior to that, Kevin worked as a Software Engineer (Co-op) at Healthcare Systems R&A Inc. during Summer 2023. He also served as a Teaching Assistant at Sheridan College during Fall 2022."
            },
            {
                "role": "user",
                "content": "Tell me about one of Kevin's work experiences."
            },
            {
                "role": "assistant",
                "content": "During a Co-op as a Junior Programmer at SIRT (Screen Industries Research and Training Centre) in Winter 2024, Kevin developed a mobile app using Unity and C# to capture the user's response time when presented with visual stimuli. Additionally, Kevin worked on developing a Unity plugin that helps users generate character animation using an AI-powered audio prompt. His responsibilities also included writing technical documentation detailing code architecture for future engineers."
            },
            {
                "role": "user",
                "content": "Tell me about another work experience."
            },
            {
                "role": "assistant",
                "content": "During a Co-op as a Software Engineer at Healthcare Systems R&A Inc. in Summer 2023, Kevin contributed to a Brain-Computer Interface Project for Stroke Rehabilitation using Machine Learning models. He worked on implementing baseline correction as a data-cleaning method and designed and implemented a Maze mini-game using Python for patients to interact with the Brain-Computer Interface System."
            },
            {
                "role": "user",
                "content": "Tell me about Kevin."
            },
            {
                "role": "assistant",
                "content": "Kevin Dang is a recent Computer Engineering Technology Graduate. Kevin has had an interest in working with computers for a long time and it has led him to have a passion for programming."
            },
            {
                "role": "assistant",
                "content": "Is there anything else you would like to know about Kevin or his website?"
            },
            {
                "role": "user",
                "content": "Tell me about Kevin's skillsets."
            },
            {
                "role": "assistant",
                "content": "Kevin's skills include Java, C, C#, C++, Python, JavaScript, HTML, CSS, React.js, Node.js, Docker,\nAndroid App Development and SQL/Relational Database."
            },
            {
                "role": "user",
                "content": "Tell me about Kevin's qualifications."
            },
            {
                "role": "assistant",
                "content": "Kevin has had three Co-op work terms as a Junior Programmer, a Software Engineer, and a Teaching Assistant. Kevin is proficient in technologies such as Java, C#, and Python. He knows Object-Oriented Programming, using version control technologies like Git/GitHub, and SQL/relational databases. He also has experience using JavaScript/TypeScript, HTML, CSS, React.js, and Node.js which were used to creatively design, build, and deploy applications such as his personal website"
            },
            {
                "role": "user",
                "content": "Tell me about Kevin's projects."
            },
            {
                "role": "assistant",
                "content": "Kevin's projects include a React Notepad App, an Android Notepad App, and a Desktop Notepad App. These applications allow users to create and save notes with user authentication features. The data is stored on a backend server accessible across different platforms such as web, mobile (Android), and desktop."
            },
            {
                "role": "user",
                "content": "How can I contact Kevin?"
            },
            {
                "role": "assistant",
                "content": "You can contact Kevin at kevindouglasdang@gmail.com. You can also find more information on his LinkedIn profile or GitHub page in the Contact Section."
            },
            {
                "role": "user",
                "content": "How are you?"
            },
            {
                "role": "assistant",
                "content": "I'm here to assist you with any questions you have about Kevin Dang and his website. How can I help you today?"
            },
            {
                "role": "user",
                "content": "Where can I find Kevin's resume?"
            },
            {
                "role": "assistant",
                "content": "You can find Kevin's resume in the contact section of his website."
            },
            {
                "role": "user",
                "content": "Tell me about one of Kevin's projects."
            },
            {
                "role": "assistant",
                "content": "One of Kevin's projects is the React Notepad App, a Full-Stack React Notepad website with User Authentication. It allows users to sign in with Google to create and save their notes on the backend server. The app is hosted on AWS and accessible from an Android Notepad app and a Desktop Notepad app as well."
            },
            {
                "role": "user",
                "content": "Tell me about one of Kevin's work experiences at Sheridan College."
            },
            {
                "role": "assistant",
                "content": "As a Teaching Assistant at Sheridan College during Fall 2022, Kevin TA'd for courses such as Java (Object Oriented Programming), Computer Mathematics, and front-end web development using HTML, CSS, and JavaScript. He assisted students by answering questions during lectures, group reviews, and one-on-one sessions. Additionally, he contributed to updating a Time-Management LibGuide on the official Sheridan College website by adding new content and utilizing HTML to add functionality."
            },
            {
                "role": "user",
                "content": "Tell me about another one of Kevin's projects."
            },
            {
                "role": "assistant",
                "content": "Another project of Kevin's is the Android Notepad App, which is an Android application that allows users to sign in with Google to create and save notes on a backend server. The notes created using this app can also be accessed from the React Notepad website and Desktop Notepad app."
            },
            {
                "role": "user",
                "content": "Does Kevin have any other projects?"
            },
            {
                "role": "assistant",
                "content": "Yes, Kevin has another project called the Desktop Notepad App. It is a desktop application for Windows that enables users to sign in with Google to create and save notes on a backend server. The app is cross-platform, and the notes created can be accessed from the React Notepad website and Android Notepad app as well."
            },
            {
                "role": "user",
                "content": "What are some skills that Kevin has?"
            },
            {
                "role": "assistant",
                "content": "Kevin's skills include Java, C, C#, C++, Python, JavaScript, HTML, CSS, React.js,\nNode.js Docker Android App Development and SQL/Relational Database."
            },
            {
                "role": "user",
                "content": "What is your name?"
            },
            {
                "role": "assistant",
                "content": "I am a web assistant for Kevin Dang's website. How can I assist you today?"
            },
            {
                "role": "user",
                "content": "What skills do you have related to web development?"
            },
            {
                "role": "assistant",
                "content": "Kevin has skills related to web development such as HTML, CSS, JavaScript, React.js, and Node.js. These skills were used in designing and building applications like his personal website."
            },
            {
                "role": "user",
                "content": "Tell me about Kevin."
            },
            {
                "role": "assistant",
                "content": "Kevin Dang is a recent Computer Engineering Technology Graduate. Kevin has had an interest in working with computers for a long time and it has led him to have a passion for programming."
            },
            {
                "role": "user",
                "content": "Have you attended University?"
            },
            {
                "role": "assistant",
                "content": "I am an AI assistant designed to provide information about Kevin Dang and his website. If you have any questions related to Kevin or his projects, feel free to ask!"
            },
            {
                "role": "user",
                "content": "Has Kevin attended University?"
            },
            {
                "role": "assistant",
                "content": "Kevin is a recent graduate of Sheridan College, where he studied Computer Engineering Technology."
            },
            {
                "role": "user",
                "content": "How many jobs did Kevin work at?"
            },
            {
                "role": "assistant",
                "content": "Kevin completed three Co-op work terms during his time as a student: Junior Programmer at SIRT, Software Engineer at Healthcare Systems R&A Inc., and Teaching Assistant at Sheridan College."
            },
            {
                "role": "user",
                "content": input
            },

        ],
        temperature: 0.2,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 1.5,
        presence_penalty: 1.5,
    }).then(response => {
        reply = response.choices[0].message.content;
    })

    return reply;
};
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}\nThe Server is running`)
});
