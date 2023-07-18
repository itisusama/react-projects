import "./css/style.css";

const Services = () =>{
    return(
    <>
    <section className="services">
  <h3>Services</h3>
  <h5>What I can do for you?</h5>

  <div className="services__container">
    <div className="service1">
      <button className="bttn-slant bttn-sm bttn-warning">Static Web Design</button>
      <p>
        I will design a beautiful single page or multi page web page.
      </p>
    </div>
    
    <div className="service2">
      <button className="bttn-slant bttn-sm bttn-warning">Dynamic Web Design</button>
      <p>
        I will design a beautiful single page or multi page web page.
      </p>
    </div>
    
    <div className="service3">
      <button className="bttn-slant bttn-sm bttn-warning">Core PHP CRUD</button>
      <p>
        I will design a beautiful single page or multi page web page.
      </p>
    </div>
    
    <div className="service4">
      <button className="bttn-slant bttn-sm bttn-warning">PHP Laravel CRUD</button>
      <p>
        I will design a beautiful single page or multi page web page.
      </p>
    </div>
    
    <div className="service5">
      <button className="bttn-slant bttn-sm bttn-warning">Word Document</button>
      <p>
        I will design a beautiful single page or multi page web page.
      </p>
    </div>
    
    <div className="service6">
      <button className="bttn-slant bttn-sm bttn-warning">Powerpoint Prsentation</button>
      <p>
        I will design a beautiful single page or multi page web page.
      </p>
    </div>
    
    <br /><br />
    <button id="hire-me" className="bttn-stretch bttn-md bttn-warning">Hire Me</button>
  </div>
</section>

    </>
    );
}

export default Services;