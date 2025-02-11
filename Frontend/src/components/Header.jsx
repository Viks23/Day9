import heroImage from "../img/hero.png"
import "./Header.css"


function Header() {
  

  return (
    <>
    <main>
      <section>
        <img src={heroImage} alt=""/>
        <h1>
            Web Designer
           <br/>
           <i>& Developer</i>
        </h1>
        <p>Premium Web Design, Development, and SEO <br/>
        Services to help your business stand out.</p>
      </section>
    </main>
    </>
  )
}

export default Header;
