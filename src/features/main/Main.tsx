import { ParticlesContainer } from "../../components/item/Particles/ParticlesContainer";
import { particlesOption } from "../../components/item/Particles/particlesOption";
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import "./main.scss";

export const Main = () => {
   return (
      <>
         <section className='main' id="main">
            <ParticlesContainer options={particlesOption} />
            <div className="container">
               <div className="main__columns">
                  <div className="main__greeting">
                     <span className="main__text">
                        <span> Hey,</span>
                        <span>I’m Alexander</span>
                        <span>Lukomsky</span>
                     </span>
                     <h1 className="main__title">
                        Frontend
                        <Typewriter
                           options={{ strings: ['Developer'], autoStart: true, loop: true }}
                        />
                     </h1>
                  </div>
                  <div className='main__photoBlock'>
                     <Tilt>
                        <img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/07/04/216364.jpg" alt="" />
                     </Tilt>
                  </div>
               </div>
            </div>

         </section>
      </>

   )
}