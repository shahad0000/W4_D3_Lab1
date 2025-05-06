const characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "Kevin",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];
  
  // 1 
  let mass75 = characters.find(character => character.mass > 75);
  console.log(mass75);
  
  // 2
  let eyeColor = characters.find(character => character.height < 180).eye_color;
  console.log(eyeColor);
  
  // 3
  let charactersHeightsMed = characters.filter(character => character.height > 150 && character.height < 210);
  console.log(charactersHeightsMed);
  
  // 4
  let femaleCharacters = characters.filter(character => character.gender === "female");
  console.log(femaleCharacters);
  
  // 5
  let eyeColorsArr = characters.map(character => character.eye_color);
  console.log(eyeColorsArr);
  
  // 6
  let characterMassArr = characters.map(character => character.mass);
  console.log(characterMassArr);
  
  // 7
  let sortedNames = characters.map(character => character.name).sort();
  console.log(sortedNames);
  
  // 8
  let sortedHeights = characters.map(character => character.height).sort((a, b) => a - b);
  console.log(sortedHeights);
  
  // 9 
  let heightAbv100 = characters.every(character => character.height > 100);
  console.log(heightAbv100);
  
  // 10
  let lighterThan200 = characters.every(character => character.mass < 200);
  console.log(lighterThan200);
  
  // 11
  let hasBlackEyes = characters.some(character => character.eye_color === "black");
  console.log(hasBlackEyes);
  
  // 12
  let height177 = characters.some(character => character.height === 177);
  console.log(height177);
  
  
  