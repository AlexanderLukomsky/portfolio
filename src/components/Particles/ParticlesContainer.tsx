import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
export const ParticlesContainer: React.FC<PropsType> = ({ options }) => {
   const customInit = useCallback(async (engine: Engine) => {
      await loadFull(engine);
   }, []);
   return <Particles className='particles' options={options} init={customInit} />;
}
type PropsType = {
   options: any
}