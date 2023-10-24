/*Ten fat sausages, sizzling in a pan, one went pop and the other went bang!

Nine fat sausages, sizzling in a pan, one went pop and the other went bang!

Eight fat sausages, sizzling in a pan, one went pop and the other went bang!

Seven fat sausages, sizzling in a pan, one went pop and the other went bang!

Six fat sausages, sizzling in a pan, one went pop and the other went bang!

 Five fat sausages, sizzling in a pan, one went pop and the other went bang!

Four fat sausages, sizzling in a pan, one went pop and the other went bang!

Three fat sausages, sizzling in a pan, one went pop and the other went bang!

Two fat sausages, sizzling in a pan, one went pop and the other went bang!

One fat sausages, sizzling in a pan, one went pop and the other went bang!

No fat sausages, sizzling in a pan*/

var word = "fat sausages";
var count = 10;
const list = document.querySelector('#rhyme');
while (count > 0) {
    var rhyme = count + " " + word + "s" + " sizzling in the pan";
    var paragraph = document.createElement("p");
    paragraph.textContent = rhyme;
    list.appendChild(paragraph);

    console.log("one went pop and the other went bang!");

    count = count - 1;

    if (count > 0) {
        console.log(count + " " + word + "s" + " sizzling in the pan");
    } else {
        console.log("No fat sausages sizzling in a pan");
    };

}




