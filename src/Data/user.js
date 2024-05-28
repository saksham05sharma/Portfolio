const INFO =  {
    main: {
        title: "Saksham-Portfolio",
        name: "Saksham Sharma",
        email: "sakshamsharma8982@gmail.com",
        logo: "../../public/images/logo.png"
    }, 
    social: {
        github: "https://github.com/saksham05sharma/",
		linkedin: "https://www.linkedin.com/in/saksham05sharma",
		instagram: "https://instagram.com/_saksham__05_",
		unstop: "https://unstop.com/u/sakshsha2434"
    },
    home: {
		title: "Full-stack web developer, and a proactive learner.",
		description:
			"I am a full-stack developer with expertise in MERN Technology. I have experience in building scalable, secure and reliable web applications. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},
	about: {
		title: "I’m Saksham Sharma. I live in Gwalior, Madhya Pradesh, India, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},
    experience: {
        title: "My Proffesional Journey",
        description: 
            "I gained extensive experience leading teams, guiding projects to successful completion, delegating tasks effectively, and prioritizing clear communication and strategic thinking to drive positive outcomes."
    },
    projects: [
        {
            title: "Snoppy",
			description:
				"At Snoppy, I spearheaded the implementation of robust user authentication utilizing JWT (JSON Web Tokens) to ensure secure access to our platform. Leveraging Socket.io, I seamlessly integrated real-time messaging features, fostering enhanced user engagement and interaction. To bolster application performance, I meticulously optimized database operations through indexing and query enhancements, resulting in a notable 20% reduction in response times. Furthermore, to fortify user account security, I implemented bcrypt hashing for passwords, mitigating the risk of unauthorized access or data breaches.",
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
            logo: "../../public/images/project1.png",
			linkText: "View Project",
			link: "https://github.com/snoppy",
        },
        {
            title: "Stockify",
			description:
				"At Stockify, I led the development of a cutting-edge MERN stock application that integrates machine learning and LSTM models. This innovative platform harnesses 15 years of historical data alongside live updates to predict stock trends with precision. With a focus on user experience, I engineered intuitive features tailored for portfolio analysis, empowering users to make informed investment decisions effortlessly. Additionally, I implemented an OTP-based authentication model, ensuring robust security measures to safeguard user data and transactions.",
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
            logo: "../../public/images/project2.png",
			linkText: "View Project",
			link: "https://github.com/stockify",
        },
        {
            title: "Climote",
			description:
				"Climote is an innovative weather application designed to provide users with accurate weather forecasts, leveraging the power of the openWeather API. Through seamless integration with this API, Climote delivers comprehensive and up-to-date weather data, empowering users to make informed decisions about their plans and activities. From current conditions to extended forecasts, Climote ensures users have access to the weather information they need, when they need it. Additionally, Climote's responsive website design ensures a seamless and user-friendly experience across various devices, catering to the diverse needs of its user base.",
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
            logo: "../../public/images/project3.png",
			linkText: "View Project",
			link: "https://climote.netlify.app/",
        }
    ]
}
 
export default INFO;