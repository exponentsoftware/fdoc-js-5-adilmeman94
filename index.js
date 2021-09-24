import fetch from "node-fetch";
let useData = null;
const fetchData = async () => {
  const data = await fetch("https://restcountries.com/v3/all");
  useData = await data.json();
  //   console.log(useData[0], "data");
  get10MostCountries();
  //   mostSpokenLanguage();s
};

fetchData();

const get10MostCountries = () => {
  let largest10 = [];
  useData.sort(function (a, b) {
    return b.area - a.area;
  });
  for (let i = 0; i < 10; i++) {
    largest10.push({ country: useData[i].name.common, area: useData[i].area });
  }
  console.log(largest10, "10 most largest countries");
};

const mostSpokenLanguage = () => {
  let totalLan = [];
  let count = 0;
  useData.forEach((item) => {
    const lenObjVal = Object.values(
      item.languages !== null || undefined ? item.languages : { eng: "English" }
    );
    // console.log(lenObjVal, "objVal");
    totalLan = [...totalLan, ...lenObjVal];
    // console.log(totalLan, "total");
    // for( let key in item.languages){

    // }
  });
  let unique = [...new Set(totalLan)];
  console.log(unique, "total");
};
