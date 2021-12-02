import Header from '../../components/header/Header';
import './Main.css';
import guyPhoto from '../../assets/img/guynote.jpeg';
import photoOne from '../../assets/img/photo_one.jpeg';

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
          <img src={guyPhoto} />
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
    </div>
  );
}
 
export default Main;