import { ArrowRight, Github } from "lucide-react"



const projects = [
    {
        id:1,
        title:"VIAPets",
        description:"Built a management system connecting both pet shop and kennel using Java, HTML, CSS, JavaScript and jQuery. Followed the Waterfall method for project execution and managed collaboration with GitHub. Developed a single user system using Java. Designed the GUI with SceneBuilder. Created a website using HTML, CSS, JavaScript and jQuery.  ",
        image: "/projects/Project1.png",
        tags: ["Java", "HTML", "CSS", "JavaScript", "JQuery", "GitHub", "JavaFX","SceneBuilder","Waterfall method"],
        githubUrl:"https://github.com/PatrikGolian/VIAPets"
    },
    {
        id:2,
        title: "VIAGO",
        description:"Built a rental management system in second semester using Java, MVVM, PostgreSQL, and FXML, ensuring functionality with Junit and managing collaboration via Scrum and GitHub. Developed a Java Client-Server system for rental management using Sockets and MVVM architecture. Followed the Scrum framework and managed collaboration with GitHub. Designed the GUI with SceneBuilder (FXML) and implemented a PostgreSQL database. Performed black-box/white-box testing and ensured functionality with JUnit. ",
        image: "/projects/Project2.png",
        tags: ["Java", "Sockets", "MVVM", "Scrum","GitHub","PostgreSQL","JUnit","FXML","JavaFX", "SceneBuilder"],
        githubUrl:"https://github.com/PatrikGolian/VIAGO"
    },
    {
        id:3,
        title:"FleetForward",
        description: "Built a trucking management system in third semester using Java, C#, and REST API with JWT, using gRPC for communication and ensuring reliability with automated testing. Developed a Java persistance tier and C# business logic and presentation tier. Integrated both using REST API with JWT authentication.Implemented gRPC for efficient service communication. Tested API endpoints with Postman and ensured reliability with XUnit and NUnit. Managed the project using Scrum & Kanban and GitHub for version control and collaboration. ",
        image: "/projects/Project3.png",
        tags: ["C#", "Blazor", "Java", "PostgreSQL", "GitHub", "REST API", "JWT", "gRPC", "Postman", "Springboot", "XUnit", "BUnit", "Scrum", "Kanban"],
        githubUrl:"https://github.com/PatrikGolian/SEP3-CSharp"
    }
]

export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I've worked on during my studies, showcasing my skills in Java, C#, PostgreSQL, REST API development, and more. Each project highlights my ability to design and implement software solutions while collaborating effectively in team environments.
                </p>
                 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}${project.image}`} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mg-4">
                                    {project.tags.map((tag) =>(
                                        <span className="px-2 px-1 text-xs font-medium border rounded-full bg-primary/40 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}

                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1 mt-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github/>
                                    </a>
                                </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/PatrikGolian">
                        Check Out My Whole Github <ArrowRight size={16} />
                    </a>
                </div>
        </div>
    </section>
}