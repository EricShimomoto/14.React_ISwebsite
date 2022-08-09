const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>IS 株式会社</h1>
            <div className='links'>
                <a href="/">Home</a>
                <a href="/create">Criar Vaga</a>
                {/* <a href="/create" style={{
                    color: "white",
                    backgroundColor :'#3542f1',
                    borderRadius : '8px'

                }}>New Blog</a> s*/}
            </div>
        </nav>
     );
}
 
export default Navbar;