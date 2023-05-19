function print(msg, count)
if (count == undefined) {
    count = 3; 
}
for (var i = 0; i < count; i++) {
    document.write("<p>" + msg);
    count++ ;
}
document.write("<hr/>");

print("hello");
print("World", 7);

const btn = document.getElementById('e')
    