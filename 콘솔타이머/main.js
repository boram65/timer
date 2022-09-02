/*
document.write(let); //html 창에 표시
alert(let); //경고창 알람
const input = prompt("알림 이름", "기본 입력 예시");    //알림창 입력 반환
const input = confirm("ok?");                   //알림창 bool형 반환

const gan = ["경", "신", "임", "계", "갑", "을", '"병', "정"];
const tee = [
  "신",
  "유",
  "슐",
  "해",
  "자",
  "축",
  "인",
  "묘",
  "진",
  "사",
  "오",
  "미",
];

const rawInput = prompt("태어난 해를 입력해주세요.", "");
const year = Number(rawInput);
const valGan = year % 10;
const valTee = year % 12;

alert(`${year}년은 ${gan[valGan]}${tee[valTee]} 년입니다.`);

/*
//-----------반복문----------
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const result = arr.map(ele => ele * 2);
//console.log(result);
const result = arr.filter(ele => ele % 2 === 0).map(ele => ele * 2);
console.log(result);
*/

let h = 0;
let m = 0;
let s = 0;
let hh;
let mm;
let ss;

const timerID = setInterval(() => {
  hh = String(h).padStart(2, "0");
  mm = String(m).padStart(2, "0");
  ss = String(s).padStart(2, "0");
  console.log(`${hh}:${mm}:${ss}`);
  s++;
  if (s === 60) {
    s = 0;
    m++;
  } else if (m === 60) {
    m = 0;
    h++;
  } else if (h === 12 && m === 60 && s === 60) {
    h = 0;
    m = 0;
    s = 0;
  }
  if (s % 10 === 0) {
    const input = confirm("10초 경과 : 정지 or 계속");
    if (input === true) clearInterval(timerID);
  }
}, 1 * 1000);
