// const Numb = [3, 1, 2, 4,3,2,1];

// function bigNum(Numb) {
//   let outPut = 0;
//   for (let i = 0; i < Numb.length; i++) {
//     if (outPut < Numb[i]) {
//       outPut = Numb[i];
//     }
//   }
//   return outPut;
// }
// console.log(bigNum(Numb));

// const outPut = Numb.reduce(function (arr, curr) {
//   if(curr>arr) arr=curr
//   return arr;
// }, 0)

// const outPut = Numb.reduce((acc, curr) => {
//   if(curr>acc) {acc= curr};
//   return acc;
// },0)

// console.log(outPut)


// *************************************************

const users = [
    {
      firstName: "Akshay",
      lastName: "saini",
      age: 26,
    },
    {
      firstName: "donald",
      lastName: "trump",
      age: 75,
    },
    {
      firstName: "elon",
      lastName: "musk",
      age: 50,
    },
    {
      firstName: "deepika",
      lastName: "padukone",
      age: 26,
    },
  ];
  
  const outPut = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
      acc[curr.age]++;
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {});
  console.log(outPut);
  
  const outPutF = users.filter((x) => x.age < 30).map((x) => x.firstName);
  console.log(outPutF);
  
  const outPutR = users.reduce((acc, curr) => {
    if (curr.age < 30) {
      acc.push(curr.firstName)
    }
    return acc;
  }, []);
  console.log(outPutR);
  