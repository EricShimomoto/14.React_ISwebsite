import { useState } from "react";
import Joblist from "./Joblist";

const Home = () => {
    const [jobs, setJob] = useState([
        {vaga: "Engenheiro de Software",classe: "Engenharia", description: "Desenvolver etc etc ...", vagas:2,id:1 },
        {vaga: "Engenheiro de Produção", classe: "Engenharia",description: "Desenvolver etc etc ...", vagas:1,id:2 },
        {vaga: "Designer Gráfico",classe: "Especialista", description: "Desenvolver etc etc ...", vagas:1,id:3 },
        {vaga: "Tantosha",classe: "Especialista", description: "Desenvolver etc etc ...", vagas:2,id:4 },
        {vaga: "Diretor de operações",classe: "Gerencia", description: "Desenvolver etc etc ...", vagas:1,id:5 }]);
    
    const handleDelete = (id) => {
        const newJob = jobs.filter(job => job.id !== id);
        setJob(newJob);
    }
    return ( 
       <div className="home">
            <Joblist jobs={jobs} title="Todas as Vagas" handleDelete={handleDelete}/><br />
            
       </div> 
     );
}
 
export default Home;