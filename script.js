// Función de renderizado
const render = () => {
    const digimones = [
      {
        name: "Koromon",
        img: "https://digimon.shadowsmith.com/img/koromon.jpg",
        level: "In Training"
      },
      {
        name: "Tsunomon",
        img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
        level: "In Training"
      },
      {
        name: "Yokomon",
        img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
        level: "In Training"
      },
      {
        name: "Motimon",
        img: "https://digimon.shadowsmith.com/img/motimon.jpg",
        level: "In Training"
      },
      {
        name: "Patamon",
        img: "https://digimon.shadowsmith.com/img/patamon.jpg",
        level: "Rookie"
      },
      {
        name: "Kuwagamon",
        img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
        level: "Champion"
      },
      {
        name: "Greymon",
        img: "https://digimon.shadowsmith.com/img/greymon.jpg",
        level: "Champion"
      },
      {
        name: "Tanemon",
        img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
        level: "In Training"
      }
    ];
  
    const contarDigimonesPorNivel = (digimones) => {
      let inTrainingCount = 0;
      let championCount = 0;
      let rookieCount = 0;
  
      for (let digimon of digimones) {
        if (digimon.level === "In Training") {
          inTrainingCount++;
        } else if (digimon.level === "Champion") {
          championCount++;
        } else if (digimon.level === "Rookie") {
          rookieCount++;
        }
      }
  
      const conteos = {
        inTraining: inTrainingCount,
        champion: championCount,
        rookie: rookieCount
      };

      const inTrainingParagraph = document.getElementById("inTraining");
      const championParagraph = document.getElementById("champion");
      const rookieParagraph = document.getElementById("rookie");
  
      inTrainingParagraph.textContent = `Existen ${conteos.inTraining} digimones con nivel In Training`;
      championParagraph.textContent = `Existen ${conteos.champion} digimones con nivel Champion`;
      rookieParagraph.textContent = `Existen ${conteos.rookie} digimones con nivel Rookie`;
    };
  
    contarDigimonesPorNivel(digimones);
  };
  
  document.addEventListener("DOMContentLoaded", render);
  