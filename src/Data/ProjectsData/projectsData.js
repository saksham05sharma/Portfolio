import snoppyImg from '../../assets/images/project1.png'
import climoteImg from '../../assets/images/project3.png'
import stockifyImg from '../../assets/images/project1.png'
import realEstateImg from '../../assets/images/project4.png'
import portfolioImg from '../../assets/images/project5.png'
const ProjectsData = [
    {
        id: "climote",
        img: climoteImg,
        name: "Climote",
        stack: ["<HTML />, <CSS />, <Javascript />, <openWeatherAPI />"],
        live: "https://climote.netlify.app/",
        description: "Climote is an innovative weather application designed to provide users with accurate weather forecasts, leveraging the power of the openWeather API. Through seamless integration with this API, Climote delivers comprehensive and up-to-date weather data, empowering users to make informed decisions about their plans and activities. From current conditions to extended forecasts, Climote ensures users have access to the weather information they need, when they need it. Additionally, Climote's responsive website design ensures a seamless and user-friendly experience across various devices, catering to the diverse needs of its user base."
    },
    {
        id: "snoppy",
        img: snoppyImg,
        name: "Snoppy",
        stack: ["<HTML />, <CSS />, <ReactJS />, <NodeJS />, <Sockets />, <MongoDB />, <ExpressJS />"],
        source: "https://github.com/saksham05sharma/Snoppy",
        description: "At Snoppy, I spearheaded the implementation of robust user authentication utilizing JWT (JSON Web Tokens) to ensure secure access to our platform. Leveraging Socket.io, I seamlessly integrated real-time messaging features, fostering enhanced user engagement and interaction. To bolster application performance, I meticulously optimized database operations through indexing and query enhancements, resulting in a notable 20% reduction in response times. Furthermore, to fortify user account security, I implemented bcrypt hashing for passwords, mitigating the risk of unauthorized access or data breaches."
    },
    {
        id: "stockify",
        img: stockifyImg,
        name: "Stockify",
        stack: ["<HTML />, <CSS />, <ReactJS />, <NodeJS />, <ExpressJS />, <LSTMAlgorithm />"],
        source: "https://github.com/saksham05sharma/stockify",
        description: "At Stockify, I led the development of a cutting-edge MERN stock application that integrates machine learning and LSTM models. This innovative platform harnesses 15 years of historical data alongside live updates to predict stock trends with precision. With a focus on user experience, I engineered intuitive features tailored for portfolio analysis, empowering users to make informed investment decisions effortlessly. Additionally, I implemented an OTP-based authentication model, ensuring robust security measures to safeguard user data and transactions."
    },
    {
        id: "realestate",
        img: realEstateImg,
        name: "RealEstate",
        stack: ["<HTML />, <CSS />, <Python />, <LinearRegressionModel />"],
        source: "https://github.com/saksham05sharma/Realestate",
        description: "This real estate web application features secure login/logout authentication using tokens in Python, ensuring user data safety. It includes a house price prediction tool that estimates property prices based on parameters like square footage. Additionally, the property finder feature helps users locate properties within a specific area and budget. The frontend is built with HTML and CSS, while Python powers the backend, providing a seamless and user-friendly experience."
    },
    {
        id: "portfolio",
        img: portfolioImg,
        name: "Portfolio",
        stack: ["<HTML />, <CSS />, <ReactJS />"],
        source: "https://github.com/saksham05sharma/Portfolio",
        description: "This is a portfolio website, which not only highlights my ability to design and develop a professional web presence but also demonstrates my commitment to delivering high-quality, functional, and aesthetically pleasing web applications. It serves as a central hub for potential employers, collaborators, and clients to learn more about my work and get in touch with me."
    }
]

export default ProjectsData