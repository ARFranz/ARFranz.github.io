import "./Projects.css"
export function Projects() {
  return (
    <>
      <div class="Projects" id="Projects">
        <h1>Work Experience</h1>
          <h2>Data Reporting</h2>
              <p>~ One key aspect of my team's application was a Splunk dashboard that contained analytics about storage devices. I converted Perl code into Python and 
                utilized vendor API's to grab the same data that was previously being kept on disk. Rather than route the data to our old 
                website, it was routed to a Splunk dashboard. This helped to decommission the old wesbite, helping save on storage costs and
                routine maintenence. 
              </p>
          <h2>Storage Infrasturcture</h2>
              <p>~ My team supports a storage and infrastructure team that needs consistent and correct data to act on. I created configuration
                alerts that would scan reported information from storage devices and send an incident through ServiceNow when certain criteria were met. 
                This enabled better incident response time and better coverage of missing or problematic storage infrastructure. I was the lead programmer 
                for these features and relied on feedback from users to produce a useful product. 
              </p>
        <h4> </h4>
        <h1>Projects</h1>
          <h2>Chess "Knight" Game</h2>
              <div class="img-chess"></div>
              <p>~ Made after I took my first course in Java, creating this game posed quite a challenge. Combining my knowledge of class structure and combining it with an interactive interface was one of my most challenging and rewarding experiences. The object of the game is to move the knight to every square, without repeating. It is quite a bit harder than it looks and people have even made a whole wikipedia on how to solve it.</p>
          <h2>LAB Visualizer</h2>
              <div class="img-lab"></div>
              <p>~ Created a program in Python during my summer internship to better visualize LAB color readings. These color readings are used to determine whether a part sample and a color sample are close enough in color for consumer needs. These color readings can then be used to calculate a single value, which then tells you if the color difference between two objects is perceptable to the human eye.</p>
          <h2>Snapchat "Data Visualizer"</h2>
              <div class="img-snapchat"></div>
              <p>~ With what I learned from creating a chess game, I took on the challenge of visualizing large sets of data in this project. Using downloadable data from Snapchat, this program creates unique color sets for every user who has sent you a snap within a two month period. You can now see in vivid color how few friends you have.</p>
          <h2>This Website &lt3</h2>
              <p>~ This website was made in order to showcase a few of the projects I have worked on. As much fun as they were for me to make, being able to share my experiences is just as rewarding.</p>
      </div>
    </>
  )
}
