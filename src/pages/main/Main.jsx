import Header from '../../components/header/Header';
import './Main.css';
import guyPhoto from '../../assets/img/guynote.jpeg';
import photoOne from '../../assets/img/photo_one.jpeg';
import logoCurta from '../../assets/img/logocurtateste.svg';
import stickUm from '../../assets/img/stick-one.svg';
import stickDois from '../../assets/img/stick-two.svg';
import fundoCodigo from '../../assets/img/fundo-code.jpg';
import Footer from '../../components/footer/Footer';


const Main = () => {
  return (
    <div className="main-all">
      <Header />
      <section className="section-note-guy">
        <div className="note-guy">
          <div>
            <h1>Frase Frase Frase</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi suscipit blanditiis nemo nobis atque unde voluptate, fuga natus reprehenderit fugiat aperiam voluptates, minima dignissimos. Labore in dolorem voluptates dicta.</p>
            <button>Start a Project</button>
          </div>
          <img alt="text" src={guyPhoto} />
        </div>
      </section>
      <section className="projects-section">
        <div className="projects-container">
          <h1>Our Projects</h1>
          <div className="projects-cards">
            <div className="box-cards"><img src={photoOne} /></div>
            <div className="box-cards"><img src={photoOne} /></div>
            <div className="box-cards"><img src={photoOne} /></div>
            <div className="box-cards"><img src={photoOne} /></div>
            <div className="box-cards"><img src={photoOne} /></div>
            <div className="box-cards"><img src={photoOne} /></div>
          </div>
        </div>
      </section>
      <section className="projects-about" style={{backgroundImage: `url(${fundoCodigo})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div className="about-container">
          <div className="about-title">
            <span>About</span>
            <img alt="text" src={logoCurta}/>
          </div>
        </div>
        <div className="about-text-wrapper">
          <div className="about-text-one">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus dicta similique, reprehenderit iure in deleniti ratione id totam esse consequuntur natus facere officiis illum dolores molestias nemo enim animi?</p>
            <img alt="text" src={stickUm} />
          </div>
          <div className="about-text-two">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus dicta similique, reprehenderit iure in deleniti ratione id totam esse consequuntur natus facere officiis illum dolores molestias nemo enim animi?</p>
            <img alt="text" src={stickDois} />
          </div>
        </div>
      </section>
      <section className="form-section">
        <div className="form-container">
          <h1>Let's work together</h1>
          <form>
            <input placeholder="Your name" type="text" />
            <input placeholder="Your best e-mail" type="text" />
            <textarea placeholder="Project description"></textarea>
            <button>Submit</button>
          </form>
          <img className="te" alt="text" src={stickDois} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
 
export default Main;