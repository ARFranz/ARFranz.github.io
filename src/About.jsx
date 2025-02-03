import "./About.css"
export function About() {
  return (
    <>
      <div class="navbar" id="About">
            <div class="gradient"> 
              <h2>
                <button class="Button"><a href="#About">About</a></button>
                <button class="Button"><a href="#Projects">Projects</a></button>
                <button class="Button"><a href="#Skills">Skills</a></button>
                <button class="Button"><a href="assets/res25.pdf" download="pdf">Resume &#8681;</a></button>
              </h2>
            <h1>Austin Franzen</h1>
            <h3>is Developing in Minneapolis, MN</h3>
            <div class="img-arrow"></div>
            <div class="img-skyln3"></div>
              <p>/* This website and other projects listed below showcase just a few of my interests and skills. 
                    I am a new graduate software engineer who is passionate about developing code. While not programming 
                    I enjoy golf, travelling, and chess. I have also been exploring the Minneapolis and St. Paul area and 
                    frequently go to see the Timberwolves play . I hope to use my skills and knowledge in the field 
                    of computer science in order to bring new tools, applications, and opportunities to others. 
              <span class="blink_me_about">_</span> */</p>
            </div>
      </div>

    </>
  )
}
