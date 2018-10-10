friends = ["Jon", "Chason", "Michael", "Robert", "Jason"]
var n = 99
i = 0
while (i <= friends.length) {
    console.log(friends[i] + ":");
    while (n>=2) {
        console.log(String(n) + " lines of code in the file, " + String(n) + " lines of code;" + friends[i] + " strikes one out, clears it all out, " + String(n-1) + " lines of code in the file");
        n-=1;
    }
    console.log("1 line of code in the File, 1 line of code;" + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
    n = 99;
    i += 1;
}
