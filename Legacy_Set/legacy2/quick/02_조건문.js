var condition = true;

if (condition) {
  console.log("ㅎㅇ");
} else if (false) {
  console.log("ㅇㅇ");
} else {
  console.log("ㅂㅂ");
}

// false의 조건 : false, undefined, null, 0, NaN이나 빈 문자열('')

var x = 2;

switch (x) {
  case 1:
    console.log("111");
    break;
  case 2:
    console.log("222");
    break;
  default:
    console.log("nothing");
}

isBirthday = true;
var greeting = isBirthday ? "생일ㅊㅋ" : "ㅎㅇ";
console.log(greeting);
