 

var text = document.getElementById('text')
var btns = document.getElementsByClassName('action_btn')
var fontOptions = document.getElementById('font-family')
var fontSize = document.getElementById('font-size')

fontOptions.addEventListener('change', function () {
    console.log("option=>", this.value)

    if (this.value === 'monospace') {
            text.style.fontFamily = 'monospace'
    }
            if (this.value === 'serif') {
                text.style.fontFamily = 'serif'
            }
                if (this.value === 'sans-serif') {
                      text.style.fontFamily = 'sans-serif' 
                 }
            
    
})

fontSize.addEventListener('change', function () {
    console.log("option=>", this.value)

    if (this.value === 'Normal') {
            text.style.fontSize = '16px'
    }
            if (this.value === 'Heading') {
                text.style.fontSize = '41px'
            }
                if (this.value === 'Sub-Heading') {
                      text.style.fontSize = '25px' 
                 }
            
    
})

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {

        switch (this.innerText.toLowerCase()) {
            case 'bold':
                console.log("fontWeight==>", text.style.fontWeight)
                if (text.style.fontWeight == "700") {
                    text.style.fontWeight = "400"
                } else {
                    text.style.fontWeight = "700"
                }
                console.log("fontWeight after", text.style.fontWeight)
                break;
            }

            switch (this.innerText.toLowerCase()) {    
            case  'italic':
                console.log("fontWeight beter", text.style.fontWeight)
               if (text.style.fontStyle == "italic") {
                    text.style.fontStyle = "normal"
                } else {
                    text.style.fontStyle = "italic"
                }
                console.log("fontWeight aaafter", text.style.fontWeight)
                break;
            }

            switch (this.innerText.toLowerCase()) {     
            case 'underline':
                if (text.style.textDecorationLine == "underline") {
                    text.style.textDecorationLine = "none";
                } else {
                    text.style.textDecorationLine = "underline";
                }
                break;
            }

            switch (this.innerText.toLowerCase()) {
            case 'right':
                text.style.textAlign = 'right';
                break;
            }

            switch (this.innerText.toLowerCase()) {
            case 'left':
                text.style.textAlign = 'left';
                break;
            }

            switch (this.innerText.toLowerCase()) {
            case 'center':
                text.style.textAlign = 'center';
                break;
            }

            switch (this.innerText.toLowerCase()) {
            case 'justify':
                text.style.textAlign = 'justify';
                break;
            default:
                break;
        }
    })
}

