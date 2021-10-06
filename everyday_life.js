/**iOS 9 Keyboard (Functional)
 *
 *  by Dov Cattan
 
 * Remember I made a program of the prehistoric keyboard about a minute ago? (If you don't, this is the link: https://www.khanacademy.org/computer-programming/prehistoric-os/6236333465534464) Well now, I added lots more features, including:
 
 * ~ Made working predictive keyboard!
 * ~ Added working number and symbol keys
 * ~ Made the "return" button work
 * ~ Made how the keys pop up when being pressed look a lot more similar to how it looks on the real prehistoric keyboard
 * ~ Edited button() function to support easily making bigger-than-usual buttons
 * ~ Made some parts of the code more efficient
 * ~ Various tweaks
 *  added images of prehistoric animals
 * recolored the entire app
 
 *READ NOW!
 * beware: this is a spin off of the ios 9 looking keyboard but because of me this looks and sounds 100X cooler than that!
 * i hope you like this
 * ENJOY!
 */ 
 
 

var txt = "";

var clickSound = getSound("retro/rumble");

var mode = "letters-uppercase";

var italic = createFont("italic");

var mouseIsReleased = false;

var keys = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890-/:;()$&@\".,?!'[]{}#%^*+=_\\|~<>€£¥•";
keys = keys.split("");


var button = function(letter, x, y, largeSize) {
    noStroke();
    fill(150, 150, 150);
    rect(x, y + 2, largeSize ? 34 : 22, 32, 4);
    stroke(230, 230, 230);
    fill(245, 163, 0);
    rect(x, y, largeSize ? 34 : 22, 32, 4);
    textAlign(CENTER, CENTER);
    textFont(italic, 20);
    fill(0, 0, 0);
    text(letter, largeSize ? x + 17 : x + 11.2, y + 17);
    
    if (mouseIsPressed) {
        if ((largeSize && mouseX > x && mouseX < x + 34 && mouseY > y && mouseY < y + 32) || (mouseX > x && mouseX < x + 22 && mouseY > y && mouseY < y + 32)) {
            noStroke();
            fill(245, 245, 245, 245);
            rect(x, y, 22, 32, 4);
            
            if (letter.toUpperCase() !== "Q" && letter.toUpperCase() !== "P" && letter !== "0" && letter !== "1") {
                if (largeSize) {
                    rect(x - 6, y - 40, 48, 53,
                    5, 5, 20, 20);
                    fill(0, 0, 0);
                    textFont(italic, 28);
                    text(letter, x + 17, y - 13);
                } else {    
                    rect(x - 6, y - 40, 34, 53,
                    5, 5, 20, 20);
                    fill(0, 0, 0);
                    textFont(italic, 28);
                    text(letter, x + 10, y - 13);
                }
            } else if (letter.toUpperCase() === "Q" || letter === "1") {
                rect(x, y - 40, 28, 53,
                5, 5, 10, 0);
                fill(0, 0, 0);
                textFont(italic, 28);
                text(letter, x + 12, y - 12);
            } else {
                rect(x - 6, y - 40, 28, 53,
                5, 5, 0, 10);
                fill(0, 0, 0);
                textFont(italic, 28);
                text(letter, x + 8, y - 12);
            }    
        }    
    }    
    
    if (mouseIsReleased && ((largeSize && mouseX > x && mouseX < x + 34 && mouseY > y && mouseY < y + 32) || (mouseX > x && mouseX < x + 22 && mouseY > y && mouseY < y + 32))) {
        playSound(clickSound);
        txt += letter;
        
        if (mode === "letters-uppercase") {
            mode = "letters-lowercase";
        }    
    }    
};

var shiftButton = function(on) {
    noStroke();
    fill(150, 150, 150);
    rect(60, 306, 32, 32, 4);
    if (on) {
        stroke(230, 230, 230);
        fill(245, 245, 245);
        rect(60, 304, 32, 32, 4);
        noStroke();
        fill(0, 0, 0);
        rect(72, 320, 8, 8, 2);
        triangle(68, 322, 84, 322, 76, 314);
    } else {
        fill(200, 200, 200);
        rect(60, 304, 32, 32, 4);
        stroke(0, 0, 0);
        strokeWeight(1.5);
        line(73, 326, 77, 326);
        line(73, 320, 73, 325);
        line(79, 320, 79, 325);
        line(72, 320, 69, 320);
        line(79, 320, 81, 320);
        line(69, 320, 76, 313);
        line(76, 313, 83, 320);
    }
    
    if (mouseIsReleased && mouseX > 60 && mouseX < 92 && mouseY > 304 && mouseY < 336) {
        playSound(clickSound);
        if (mode === "letters-uppercase") {
            mode = "letters-lowercase";
        } else {
            mode = "letters-uppercase";
        }    
    }
};

var backspaceButton = function() {
    noStroke();
    fill(3, 3, 3);
    rect(304, 306, 30, 32, 4);
    fill(200, 200, 200);
    if (mouseIsPressed && mouseX > 304 && mouseX < 334 && mouseY > 305 && mouseY < 337) {
        fill(245, 245, 245);
    }    
    rect(304, 305, 30, 32, 4);
    stroke(0, 0, 0);
    strokeWeight(1.5);
    noFill();
    rect(314, 313, 14, 14, 2);
    triangle(315, 313, 315, 327, 308, 321);
    stroke(200, 200, 200);
    if (mouseIsPressed && mouseX > 304 && mouseX < 334 && mouseY > 305 && mouseY < 337) {
        stroke(245, 245, 245);
    }    
    strokeWeight(3);
    line(314, 317, 314, 323);
    point(316, 316);
    point(316, 325);
    stroke(0, 0, 0);
    strokeWeight(1.5);
    line(318, 318, 323, 323);
    line(318, 323, 323, 318);
    
    if (mouseIsReleased && mouseX > 304 && mouseX < 334 && mouseY > 305 && mouseY < 337) {
        playSound(clickSound);
        txt = txt.substr(0, txt.length - 1);
    }
};

var lettersToNumbersButton = function() {
    noStroke();
    fill(150, 150, 150);
    rect(60, 352, 30, 32, 4);
    fill(200, 200, 200);
    rect(60, 351, 30, 32, 4);
    textAlign(CENTER, CENTER);
    if (mode === "numbers-symbols" || mode === "symbols") {
        textFont(italic, 13);
        fill(0, 0, 0);
        text("ABC", 75, 367);
    } else {    
        textFont(italic, 15);
        fill(0, 0, 0);
        text("123", 75, 367);
    }
    
    if (mouseIsReleased && mouseX > 60 && mouseX < 90 && mouseY > 351 && mouseY < 383) {
        playSound(clickSound);
        if (mode === "letters-uppercase" || mode === "letters-lowercase") {
            mode = "numbers-symbols";
        } else {
            mode = "letters-lowercase";
        }    
    }
};

var switchKeyboardsButton = function() {
    noStroke();
    fill(150, 150, 150);
    rect(95, 352, 30, 32, 4);
    fill(200, 200, 200);
    rect(95, 351, 30, 32, 4);
    stroke(0, 0, 0);
    strokeWeight(1.2);
    noFill();
    ellipse(110, 366, 16, 16);
    ellipse(110, 366, 8, 16);
    line(102, 366, 115, 366);
    line(110, 358, 110, 372);
    arc(110, 360, 10, 6, 20, 160);
    arc(110, 372, 10, 6, -160, -20);
};

var speechButton = function() {
    noStroke();
    fill(150, 150, 150);
    rect(130, 352, 22, 32, 4);
    stroke(230, 230, 230);
    fill(245, 245, 245);
    rect(130, 350, 22, 32, 4);
    stroke(180, 180, 180);
    strokeWeight(1.5);
    rect(138, 358, 5, 10, 4);
    noFill();
    arc(141, 364, 12, 15, 30, 150);
    line(136, 367, 136, 365);
    line(146, 367, 146, 365);
    line(141, 375, 141, 372);
    line(139, 376, 143, 376);
};    

var spaceButton = function() {
    noStroke();
    fill(250, 250, 250);
    rect(158, 352, 107, 32, 4);
    stroke(230, 230, 230);
    fill(245, 245, 245);
    if (mouseIsPressed && mouseX > 158 && mouseX < 265 && mouseY > 350 && mouseY < 382) {
        noStroke();
        fill(200, 200, 200);
    }    
    rect(158, 350, 107, 32, 4);
    textFont(italic, 14);
    fill(0, 0, 0);
    text("space", 210, 366);
    
    if (mouseIsReleased && mouseX > 158 && mouseX < 265 && mouseY > 350 && mouseY < 382) {
        playSound(clickSound);
        txt += " ";
        if (mode === "numbers-symbols" || mode === "symbols") {
            mode = "letters-lowercase";
        }    
    }
};

var returnButton = function() {
    noStroke();
    fill(150, 150, 150);
    rect(272, 352, 63, 32, 4);
    fill(200, 200, 200);
    if (mouseIsPressed && mouseX > 272 && mouseY > 351 && mouseX < 335 && mouseY < 383) {
        fill(245, 245, 245);
    }    
    rect(272, 351, 63, 32, 4);
    textFont(italic, 14);
    fill(0, 0, 0);
    text("return", 304, 366);
    
    if (mouseIsReleased && mouseX > 272 && mouseY > 351 && mouseX < 335 && mouseY < 383) {
        playSound(clickSound);
        if (txt.length > 0) {
            txt += "\n";
        } else {
            txt += " \n";
        }    
    }    
};

var symbolsKeyboardButton = function() {
    noStroke();
    fill(150, 150, 150);
    rect(60, 306, 30, 32, 4);
    fill(200, 200, 200);
    rect(60, 305, 30, 32, 4);
    
    fill(0, 0, 0);
    
    if (mode === "numbers-symbols") {
        textFont(italic, 13);
        text("#+=", 75, 322);
    } else {
        textFont(italic, 15);
        text("123", 75, 322);
    }    
    
    if (mouseIsReleased && mouseX > 60 && mouseX < 90 && mouseY > 305 && mouseY < 337) {
        playSound(clickSound);
        if (mode === "numbers-symbols") {
            mode = "symbols";
        } else {
            mode = "numbers-symbols";
        }    
    }    
};

var predictiveKeyboard = function() {
    fill(255, 0, 0);
    rect(0, 168, width, 32);
    stroke(255, 255, 255);
    strokeWeight(1);
    line(150, 168, 150, 199);
    line(240, 168, 240, 199);
    
    textAlign(CENTER, CENTER);
    textFont(italic, 18);
    
    var splitIntoLetters = txt.split("");
    var splitIntoWords = txt.split(" ");
    
    var lastWord = splitIntoWords[splitIntoWords.length - 1];
    var commonWords = ["The", "Be", "To", "Of", "And", "A", "In", "That", "Have", "I", "It", "For", "Not", "On", "With", "He", "As", "You", "Do", "At", "This", "But", "His", "By", "From", "They", "We", "Say", "Her", "She", "Or", "An", "Will", "My", "One", "All", "Would", "There", "Their", "What", "So", "Up", "Out", "If", "About", "Who", "Get", "Which", "Go", "Me", "When", "Make", "Can", "Like", "Time", "No", "Just", "Him", "Know", "Take", "People", "Into", "Year", "Your", "Good", "Some", "Could", "Them", "See", "Other", "Than", "Then", "Now", "Look", "Only", "Come", "Its", "Over", "Think", "Also", "Back", "After", "Use", "Two", "How", "Our", "Work", "First", "Well", "Way", "Even", "New", "Want", "Because", "Any", "These", "Give", "Day", "Most", "Us", "Person", "Thing", "Man", "World", "Life", "Hand", "Part", "Child", "Eye", "Woman", "Place", "Week", "Case", "Point", "Government", "Company", "Number", "Group", "Problem", "Fact", "Find", "Tell", "Ask", "Seem", "Feel", "Try", "Leave", "Call", "Last", "Long", "Great", "Little", "Own", "Old", "Right", "Big", "High", "Different", "Small", "Large", "Next", "Early", "Young", "Important", "Few", "Public", "Bad", "Same", "Able", "Beneath", "Under", "Above","Highway","Hell","Original","And","Yes","Sir","Or"];
    
    var word2Found = false;
    var word3Found = false;
    
    var word1 = function(word) {
        if (mode === "letters-lowercase" && word !== "I" && word !== "I'm" && word.indexOf("\"") === -1 && splitIntoWords.length > 1) {
            word = word.toLowerCase();
        }
        
        fill(255, 255, 255);
        if (mouseIsPressed && mouseX > 0 && mouseX < 150 && mouseY > 168 && mouseY < 199) {
            fill(255, 255, 255);
            rect(0, 168, 150, 32);
            fill(0, 0, 0);
        }
        if (mouseIsReleased && mouseX > 0 && mouseX < 150 && mouseY > 168 && mouseY < 199) {
            playSound(clickSound);
            if (word.replace(/"/g, "") === lastWord) {
                txt += " ";
            } else {
                txt += word + " ";
            }
            mode = "letters-lowercase";
        }
        
        text(word, 105, 184);
    },
    word2 = function(word) {
        if (mode === "letters-lowercase" && word !== "I" && word !== "I'm" && splitIntoWords.length > 1) {
            word = word.toLowerCase();
        }
        
        fill(255, 255, 255);
        if (mouseIsPressed && mouseX > 150 && mouseX < 240 && mouseY > 168 && mouseY < 199) {
            fill(245, 245, 245);
            rect(150, 168, 90, 32);
            fill(0, 0, 0);
        }    
        if (mouseIsReleased && mouseX > 150 && mouseX < 240 && mouseY > 168 && mouseY < 199) {
            playSound(clickSound);
            if (splitIntoLetters.length === 0 || splitIntoLetters[splitIntoLetters.length - 1] === " ") {
                txt += word + " ";
                mode = "letters-lowercase";
            } else {
                splitIntoWords[splitIntoWords.length - 1] = word + " ";
                txt = splitIntoWords.join(" ");
            }    
        }    
        
        text(word, width/2 - 4, 184);
    },
    word3 = function(word) {
        if (mode === "letters-lowercase" && word !== "I" && word !== "I'm" && splitIntoWords.length > 1) {
            word = word.toLowerCase();
        }
        
        fill(255, 255, 255);
        if (mouseIsPressed && mouseX > 240 && mouseX < width && mouseY > 168 && mouseY < 199) {
            fill(245, 245, 245);
            rect(240, 168, width - 240, 32);
            fill(0, 0, 0);
        }
        if (mouseIsReleased && mouseX > 240 && mouseX < width && mouseY > 168 && mouseY < 199) {
            playSound(clickSound);
            if (splitIntoLetters.length === 0 || splitIntoLetters[splitIntoLetters.length - 1] === " ") {
                txt += word + " ";
                mode = "letters-lowercase";
            } else {
                splitIntoWords[splitIntoWords.length - 1] = word + " ";
                txt = splitIntoWords.join(" ");
            }    
        }    
        
        text(word, 285, 184);
    };
    
    if (splitIntoLetters.length === 0 || splitIntoLetters[splitIntoLetters.length - 1] === " ") {
        word1("I");
        word2("The");
        word3("I'm");
    } else {
        word1("\"" + lastWord + "\"");
        
        var wordsAnalyzed = 0;
        if (lastWord.match(/[(|)|[|*|+|\\|?]/) === null) {
            while (wordsAnalyzed < commonWords.length) {
                if (!word2Found) {
                    var last = new RegExp(lastWord, "i");
                    if (commonWords[wordsAnalyzed].match(last) !== null) {
                        word2(commonWords[wordsAnalyzed]);
                        word2Found = true;
                    }    
                } else if (!word3Found) {
                    var last = new RegExp(lastWord, "i");
                    if (commonWords[wordsAnalyzed].match(last) !== null) {
                        word3(commonWords[wordsAnalyzed]);
                        word3Found = true;
                    }    
                }    
                
                wordsAnalyzed++;
            }
        }
    }    
};    

mouseClicked = function() {
    mouseIsReleased = true;
};    

draw = function() {
    background(0, 0, 0);
    
    noStroke();
    fill(168, 13, 13);
    rect(0, height/2, width, height/2);
    
    if (mode === "letters-uppercase") {
        predictiveKeyboard();

        for (var i = 0; i < 10; i++) {
            button(keys[i], 60 + i * 28, 212);
        }
        for (var i = 0; i < 9; i++) {
            button(keys[i + 10], 74 + i * 28, 258);
        }
        for (var i = 0; i < 7; i++) {
            button(keys[i + 19], 102 + i * 28, 304);
        }
        
        shiftButton(true);
        
        backspaceButton();
        
        lettersToNumbersButton();
        switchKeyboardsButton();
        speechButton();
        spaceButton();
        returnButton();
    } else if (mode === "letters-lowercase") {
        predictiveKeyboard();
        
        for (var i = 0; i < 10; i++) {
            button(keys[i].toLowerCase(), 60 + i * 28, 212);
        }
        for (var i = 0; i < 9; i++) {
            button(keys[i + 10].toLowerCase(), 74 + i * 28, 258);
        }
        for (var i = 0; i < 7; i++) {
            button(keys[i + 19].toLowerCase(), 102 + i * 28, 304);
        }
        
        shiftButton(false);
        
        backspaceButton();
        
        lettersToNumbersButton();
        switchKeyboardsButton();
        speechButton();
        spaceButton();
        returnButton();
    } else if (mode === "numbers-symbols") {
        predictiveKeyboard();
        
        for (var i = 0; i < 10; i++) {
            button(keys[i + 26], 60 + i * 28, 212);
        }
        for (var i = 0; i < 10; i++) {
            button(keys[i + 36], 60 + i * 28, 258);
        }
        for (var i = 0; i < 5; i++) {
            button(keys[i + 46], 100 + i * 40, 304, true);
        }    
        
        backspaceButton();
        
        lettersToNumbersButton();
        switchKeyboardsButton();
        speechButton();
        spaceButton();
        returnButton();
        
        symbolsKeyboardButton();
    } else if (mode === "symbols") {
        predictiveKeyboard();
        
        for (var i = 0; i < 10; i++) {
            button(keys[i + 51], 60 + i * 28, 212);
        }
        for (var i = 0; i < 10; i++) {
            button(keys[i + 61], 60 + i * 28, 258);
        }
        for (var i = 0; i < 5; i++) {
            button(keys[i + 46], 100 + i * 40, 304, true);
        }    
        
        backspaceButton();
        
        lettersToNumbersButton();
        switchKeyboardsButton();
        speechButton();
        spaceButton();
        returnButton();
        
        symbolsKeyboardButton();
    }    
    
    var blinker = "";
    if (millis() % 1000 < 500) {
        blinker = "|";
    }
    
    fill(255, 119, 0);
    textAlign(LEFT, TOP);
    textFont(italic, 25);
    text(txt + blinker, 5, 20, width - 20, Infinity);
    
    mouseIsReleased = false;
    //images of prehistoric animals
    var pre=getImage("avatars/piceratops-ultimate");
image(pre,330,300,70,100);
image(pre,0,300,70,100);
var baby=getImage("avatars/piceratops-seed");
image(baby,-10,200,80,80);
image(baby,320,200,80,80);
};
