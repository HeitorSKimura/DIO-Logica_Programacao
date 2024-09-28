const rankings = [
    {"name": "Ferro", "minValue": 0, "maxValue": 1000},
    {"name": "Bronze", "minValue": 1001, "maxValue": 2000},
    {"name": "Prata", "minValue": 2001, "maxValue": 5000},
    {"name": "Ouro", "minValue": 5001, "maxValue": 7000},
    {"name": "Platina", "minValue": 7001, "maxValue": 8000},
    {"name": "Ascendente", "minValue": 8001, "maxValue": 9000},
    {"name": "Imortal", "minValue": 9001, "maxValue": 10000},
    {"name": "Radiante", "minValue": 10001, "maxValue": Infinity}
  ];

  const listOfHeroes = [
    {"name": "Ironclad", "xp": 950},
    {"name": "Stone", "xp": 800},
    {"name": "Grit", "xp": 700},
    {"name": "Bronzebeard", "xp": 1500},
    {"name": "Hammer", "xp": 1200},
    {"name": "Silverwing", "xp": 3000},
    {"name": "Shimmer", "xp": 4500},
    {"name": "Quickstrike", "xp": 2500},
    {"name": "Goldenblade", "xp": 5500},
    {"name": "Aurora", "xp": 6700},
    {"name": "Platinumfury", "xp": 7500},
    {"name": "Starshine", "xp": 7800},
    {"name": "Ascendant", "xp": 8500},
    {"name": "Skysurge", "xp": 8900},
    {"name": "Immortalis", "xp": 9200},
    {"name": "Shadowfang", "xp": 9800},
    {"name": "Radiant", "xp": 10500},
    {"name": "Sunfire", "xp": 11200},
    {"name": "Luminara", "xp": 12300},
    {"name": "Blazingstar", "xp": 13000}
  ];
  
  let msg = "";
  
  for (let i = 0; i < listOfHeroes.length; i++){
    const hero = listOfHeroes[i];
    let rank = "";
    for (let r = 0; r < rankings.length; r++){
      const ranking = rankings[r];
      if (hero.xp >= ranking.minValue && hero.xp <= ranking.maxValue){
        rank = ranking.name;
      }
    }
    msg = `O Herói de nome ${hero.name} está no nível de ${rank}`;
    console.log(msg);
  }