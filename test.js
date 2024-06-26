const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const spread = [...num1, ...num2];
// console.log(spread);

const a1 = spread[0];
// console.log(a1);

const obj = JSON.stringify(spread, null, 1);

// console.log(obj);

let details = [
    {
       "studentId": 101,
       "studentName": "John",
       "countryName": "US",
       "subjectDetails": "{\"0\":\"JavaScript\",\"1\":\"David\"}"
    },
    {
       "studentId": 102,
       "studentName": "Bob",
       "countryName": "UK",
       "subjectDetails": "{\"0\":\"Java\",\"1\":\"Carol\"}"
    },
    {
       "studentId": 103,
       "studentName": "Mike",
       "countryName": "AUS",
       "subjectDetails": "{\"0\":\"MongoDB\",\"1\":\"Adam\"}"
    }
 ]

//  for (let i = 0; i < details.length; i++) {
//     console.log(i + " ", details[i]);
// }

//  console.log(details[0]);

//  let details1 = JSON.parse(details[0].subjectDetails);
//  console.log(details1);

// details.map((detail, i) => console.log(i, detail));

let num = [1, 2, 2, 2, 3, 4];
let dup = [];
let i, j = 0;

for (i = 0; i < num.length; i++) {
   for (j = i + 1; j < num.length; j++) {
      if (num[i] === num[j] && !dup.includes(num[i])) {
         dup.push(num[i]);
      }
   }
}

console.log(dup);

let count = {};
let a = 0;
for (a = 0; a < num.length; a++) {
   if (count[num[a]]) {
      count[num[a]] += 1;
   } else {
      count[num[a]] = 1;
   }
}

console.log(count);

for (let key in count) {
   console.log(`${key}: ${count[key]}`);
   if (count[key] > 1) {
      console.log(key);
   }
}
