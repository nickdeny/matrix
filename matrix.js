// console let
var cons = {};
    // console width - symbols
    cons.columns = 135;
    // console height - lines
    cons.rows = 30;
    // console tabs 
    cons.tabs = 18;
    // allow Uppercase, 0 - off
    cons.allowUpper = 1;
    // timeout
    cons.timeout = 100;
    // min-max symb lines
    cons.min = 5,
    cons.max = 15;
    // 0 - latin, 1 - cyrillic, 2 - symbols
    // [0/1] 0 - disabled, 1 - activated
    cons.langMode = [0, 0, 0, 1];
        cons.langArr = [];
        // arr.latin
        cons.langArr[0] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
        // arr.cyrillic
        cons.langArr[1] = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
        // arr.symbols + numbers
        cons.langArr[2] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ',', '/', '\\', '\"', '\'', ']', '[', '{', '}', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '№', ';', ':', '?'];
        // arr.test
        cons.langArr[3] = ['!', '@', '#', '$', '%', '^', '&', '*'];
        
    // object.Vars 
    cons.mainArr = []; // main arr
    cons.chanceAppear; // change that line appear
    cons.activeLines = [];
    
    

function setLangMode(lang) {
    for(var i = 0; i < cons.langMode.length; i++) {
        if(cons.langMode[i] == 1) {
            for(var j = 0; j < cons.langArr[i].length; j++)
                cons.mainArr.push(cons.langArr[i][j]);
        }
    }
}

function stepUp() {
    for(var i = 0; i < cons.tabs; i++) {
        cons.chanceAppear = Math.round(Math.random() * 100);
        if(cons.chanceAppear < 5)
            cons.activeLines[i] = Math.floor(cons.min + Math.random() * (cons.max + 1 - cons.min));
    }
    //console.log(cons.activeLines);
}

function showMatrix() {
    var out = '', char;
    for(var i = 0; i < cons.tabs; i++) {
            if(cons.activeLines[i] !== undefined && cons.activeLines[i] > 0) {
                char = cons.mainArr[Math.round(Math.random() * (cons.mainArr.length - 1))];
                if(cons.allowUpper == 1 && Math.round(Math.random() * 100) > 50)
                    char = char.toUpperCase();
                out += char;
                cons.activeLines[i] -= 1;
            }
            else {
                out+= ' ';
            }
        out+='\t';
    }
    
    console.log(out);
}

function startApp() {
    var out = '';
    for(var i = 0; i < (cons.tabs/2)-3; i++) {
        out += '\t';
    }
    out += '//nickdeny';
    out += '\n\n\n';
    console.log(out);
}

// matrix code
startApp();
setLangMode();

setInterval(() => {
    stepUp();
    showMatrix();
}, cons.timeout);
