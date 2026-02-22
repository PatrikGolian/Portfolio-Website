import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold">Passionate Software Student </h3>

                    <p className="text-muted-foreground">I am currently enrolled in fourth semester at VIA University College, where I have gained hands-on experience in C#, PostgreSQL, Java, Python and JavaScript, giving me a strong foundation in both software development and database design. This semester I will be diving deeper into containerization with Docker/Kubernetes and CI/CD on Azure while building a smart-greenhouse platform using .NET 10, Java (Spring Boot) and TypeScript React. </p>
                    <p className="text-muted-foreground">
                        In my free time, I enjoy living an active lifestyle - whether it is going to the gym, training calisthenics, running or exploring new places and countries. I also love expanding my knowledge through YouTube tutorials, especially on topics like C#, DevOps, Databases, Java and other areas related to software development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                        <a href="/cv/Patrik_Golian_CV.pdf" 
                        download="Patrik_Golian_CV.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                         className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-2">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Software development</h4>
                                <p className="text-muted-foreground">Creating efficient and scalable software solutions with modern technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-2">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Group work</h4>
                                <p className="text-muted-foreground">I bring a talkative, positive energy to my teams and believe that a good sense of humor is essential for a healthy working environment..</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-2">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Studying abroad</h4>
                                <p className="text-muted-foreground">To expand my horizons, I participated in Erasmus+ programs, spending one week in Salzburg, Austria and two weeks in Stuttgart, Germany. Additionally, I attended EC-English language school in Malta for one month. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}