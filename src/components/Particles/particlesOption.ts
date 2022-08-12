export const particlesOption = {
   background: {
      color: {
         value: 'transparent',
      },
   },
   fullScreen: false,
   fpsLimit: 60,
   interactivity: {
      events: {
         onClick: {
            enable: true,
            mode: "push",
         },
         resize: true,
      },
      modes: {
         push: {
            quantity: 3,
         },
         repulse: {
            distance: 200,
            duration: 0.7,
         },
      },
   },
   particles: {
      color: {
         value: "#ffffff",
      },
      links: {
         color: "#ffffff",
         distance: 150,
         enable: true,
         opacity: 0.5,
         width: 1,
      },
      collisions: {
         enable: false,
      },
      move: {
         direction: "none",
         enable: true,
         outModes: {
            default: "bounce",
         },
         random: false,
         speed: 4,
         straight: false,
      },
      number: {
         density: {
            enable: true,
            area: 800,
         },
         value: 80,
      },
      opacity: {
         value: 0.5,
      },
      shape: {
         type: "circle",
      },
      size: {
         value: { min: 1, max: 4 },
      },
   },
   detectRetina: true,
} 