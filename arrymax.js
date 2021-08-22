var marks = [45, 65, 75, 43, 53, 55, 32, 54,]
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
    
}
console.log("largest number is" ,max);