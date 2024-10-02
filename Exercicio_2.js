function playerRank(name, victory, loser, listRanking){
    msg = "";
    pdls = victory - loser;

    for (let i = 0; i < listRanking.length; i++){
        const ranks = listRanking[i];
        if (pdls <= ranks.maxWins && pdls >= ranks.minWins){
            msg = `O Herói ${name} tem de saldo de ${pdls} está no nível de ${ranks.name}`;
            return msg;
        }
    }
}

const rankings = [
    { name: "Ferro", minWins: 0, maxWins: 10 },
    { name: "Bronze", minWins: 11, maxWins: 20 },
    { name: "Prata", minWins: 21, maxWins: 50 },
    { name: "Ouro", minWins: 51, maxWins: 80 },
    { name: "Diamante", minWins: 81, maxWins: 90 },
    { name: "Lendário", minWins: 91, maxWins: 100 },
    { name: "Imortal", minWins: 101, maxWins: Infinity }
];

const listOfHeroes = [
    {"name": "Ironclad", "victory": 5, "loser": 0},
    {"name": "Stone", "victory": 12, "loser": 2},
    {"name": "Grit", "victory": 22, "loser": 1},
    {"name": "Bronzebeard", "victory": 55, "loser": 3},
    {"name": "Hammer", "victory": 85, "loser": 2},
    {"name": "Silverwing", "victory": 95, "loser": 4},
    {"name": "Shimmer", "victory": 110, "loser": 5}
  ];
  
for (let h = 0; h < listOfHeroes.length; h++){
    const heroes = listOfHeroes[h];
    console.log(playerRank(heroes.name, heroes.victory, heroes.loser, rankings))
}
