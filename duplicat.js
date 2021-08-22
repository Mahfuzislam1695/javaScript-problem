var Name = [1, 2, 1, 3, 4, 2, 6, 3, 4, 5, 7, 7, 4, 7, 8];
var uniqueNum = [];

for (var i = 0; i < Name.length; i++) {
    var element = Name[i];
    var index = uniqueNum.indexOf(element);
    if (index == -1) {
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);