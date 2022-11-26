const Home = () => {
  return (
    <div className="App"
      id="wrapper"
    >
      <p>hello world</p>
      <footer>
        <a href="http://creativecommons.org/licenses/by-sa/4.0/"
          rel="license"
        >
          <img alt="Creative Commons License"
            src="./cc.png"
            style={{borderWidth: 0}}
          />
        </a>
        <p>{'This work is licensed under a '}<a href="http://creativecommons.org/licenses/by-sa/4.0/"
          rel="license"
                                              >{'Creative Commons Attribution-ShareAlike 4.0 International License'}</a>{'.'}</p>
      </footer>
    </div>
  )
}

export default Home