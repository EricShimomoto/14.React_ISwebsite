import { useState } from "react";

const Home = () => {
    const [jobs, setBlog] = useState([
        {vaga: "Engenheiro de Software", description: "Desenvolver etc etc ...", vagas:2,id:1 },
        {vaga: "Engenheiro de Produção", description: "Desenvolver etc etc ...", vagas:1,id:2 },
        {vaga: "Designer Gráfico", description: "Desenvolver etc etc ...", vagas:1,id:3 },
        {vaga: "Tantosha", description: "Desenvolver etc etc ...", vagas:2,id:4 },
        {vaga: "Diretor de operações", description: "Desenvolver etc etc ...", vagas:1,id:5 }
        
    ]);
    return ( 
       <div className="home">
            <h2>Vagas</h2>
            <br /><br />
            {jobs.map((job) => (
                <div className = "job-preview" key={job.id}>
                    <h2>{job.vaga}</h2>
                    <p>Número de vagas: {job.vagas}</p><br />
                </div>
            ))}
       </div> 
     );
}
 
export default Home;