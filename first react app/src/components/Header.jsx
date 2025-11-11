function Header(){
     const name="Md Imam Hussain";
     const profession="Full Stack Developer";
     return(
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#about'>Projects</a>
          <a href='#about'>Contacts</a>
        </nav>
      </header>
      );
}

export default Header;