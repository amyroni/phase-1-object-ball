function gameObject() {
  const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        }
      }
    },  
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        }
      }
    }
  }
  return game;
}

const game = gameObject();

function numPointsScored(name) {
  for (const key in game) {
    if (Object.keys(game[key].players).find(player => player === name)) {
      return game[key].players[name].points
    }
  }
}

function shoeSize(name) {
  for (const key in game) {
    if (Object.keys(game[key].players).find(player => player === name)) {
      return game[key].players[name].shoe;
    }
  }
}

function teamColors(team) {
  let teamKey;
  for (const t in game) {
    if (game[t].teamName == team) {
      teamKey = t;
    }
  }
  return game[teamKey].colors;
}

function teamNames() {
  teams = [];
  for (let key in game) {
    teams.push(game[key].teamName);
  }
  return teams;
}

function playerNumbers(team) {
  let teamKey;
  for (const t in game) {
    if (game[t].teamName == team) {
      teamKey = t;
    }
  }
  let numbers = [];
  for (const player in game[teamKey].players) {
    numbers.push(game[teamKey].players[player].number)
  }
  return numbers;
}

function playerStats(name) {
  let team;
  for (const key in game) {
    if (Object.keys(game[key].players).find(player => player === name)) {
      team = key;
    }
  }
  return game[team].players[name];
}

function bigShoeRebounds() {
  let biggestShoeSize = 0;
  //let biggestShoePlayer;
  let biggestShoeRebounds;
  for (const team in game) {
    for (const player in game[team].players) {
      const shoeSize = game[team].players[player].shoe;
      if (shoeSize > biggestShoeSize) {
        biggestShoeSize = shoeSize;
        //biggestShoePlayer = player;
        biggestShoeRebounds = game[team].players[player].rebounds;
      }
    }
  }
  return biggestShoeRebounds;
}

function mostPointsScored() {
  let mostPoints = 0;
  let bestPlayer;
  for (const team in game) {
    for (const player in game[team].players) {
      const pointsScored = game[team].players[player].points
      if (pointsScored > mostPoints) {
        mostPoints = pointsScored;
        bestPlayer = player;
      }
    }
  }
  return bestPlayer;
}

function winningTeam() {
  let mostPoints = 0;
  let winner;
  for (const team in game) {
    let teamPoints = 0;
    for (const player in game[team].players) {
      teamPoints += game[team].players[player].points;
    }
    if (teamPoints > mostPoints) {
      winner = game[team].teamName;
    }
  }
  return winner;
}

function playerWithLongestName() {
  let longestLength = 0;
  let longestName;
  for (const team in game) {
    for (const player in game[team].players) {
      if (player.length > longestLength) {
        longestLength = player.length;
        longestName = player;
      }
    }
  }
  return longestName;
}

function mostStealsPlayer() {
  let mostSteals = 0;
  let mostStealsPlayer;
  for (const team in game) {
    for (const player in game[team].players) {
      const stealsNumber = game[team].players[player].steals
      if (stealsNumber > mostSteals) {
        mostSteals = stealsNumber;
        mostStealsPlayer = player;
      }
    }
  }
  return mostStealsPlayer;
}

function doesLongNameStealATon() {
  return playerWithLongestName() === mostStealsPlayer();
}
