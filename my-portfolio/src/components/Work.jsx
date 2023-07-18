import "./css/style.css";

const Work = () =>{
    return(
    <>
    <section className="education">
  <div className="education__heading">
    <h3>Work Experience</h3>
  </div>

  <div className="about__btns-info">
    <div className="about__education1">
      <div className="education__btn">
        <button className="bttn-slant bttn-sm bttn-danger">1</button>
      </div>
      <div className="education__para">
        <p>
          <h3>September to August 2022</h3>
          <br />
          <b>Software Alliance</b>
          <br />
          <b>Laravel Developer Intern</b>
        </p>
      </div>
    </div>

    <div className="about__education2">
      <div className="education__btn">
        <button className="bttn-slant bttn-sm bttn-danger">2</button>
      </div>
      <div className="education__para">
        <p>
          <h3>October 2022 to March 2023</h3>
          <br />
          <b>Software Alliance</b>
          <br />
          <b>Laravel Developer Intern</b>
        </p>
      </div>
    </div>

    <div className="about__education3">
      <div className="education__btn">
        <button className="bttn-slant bttn-sm bttn-danger">3</button>
      </div>
      <div className="education__para">
        <p>
          <h3>May to --</h3>
          <br />
          <b>Software Alliance</b>
          <br />
          <b>Laravel Developer Intern</b>
        </p>
      </div>
    </div>
  </div>
</section>

    </>
    );
}

export default Work;