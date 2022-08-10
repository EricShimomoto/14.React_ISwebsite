const Joblist = ({jobs, title, handleDelete}) => {
    // const jobs = props.jobs;
    // const title = props.title;
    return ( 
        <div className="job-list">
            <h2>{title}</h2>
            {jobs.map((job) => (
                <div className = "job-preview" key={job.id}>
                    <h2>{job.vaga}</h2>
                    <p>Número de vagas: {job.vagas}</p>
                    <button onClick={() => handleDelete(job.id)}>Delete</button>
                    <br />
                </div>
            ))}
        </div>
     );
}
 
export default Joblist;