const characters = [
    {
    too: 1,
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
    },
    {
    too: 2,
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
    },
    {
    too: 3,
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
    },
    {
    too: 4,
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
    },
    ];
function Male(value){
    return value.gender == 'male'
    
}
function Female(value){
    console.log("Females: ");
    return value.gender == 'female'
}

// var filt = characters.filter(Male)
// var filt1 = characters.filter(Female)
//     console.log("Males: ");
//     console.log(filt);
//     console.log("Females: ");
//     console.log(filt1);


    // characters.sort((a, b)=>{
    //      return b.name.length - a.name.length;

    // })
    // characters.forEach((e,i)=>{console.log( i+1 + ". "+e.name);})




    document.querySelector(".btn").addEventListener('click', ()=>{

        const asda = document.querySelector("body");
        asda.style.backgroundColor = "black"
        const eesd = document.querySelector(".btn");
        eesd.setAttribute("value", "light mode")
        document.querySelector(".btn").addEventListener('click', ()=>{
            asda.style.backgroundColor = "white"
            eesd.setAttribute("value", "dark mode")
            
        })
    })
        
        var filt = characters.filter(Male);
        var filt1 = characters.filter(Female);
        // const button1 = document.createElement("input");
        // button1.setAttribute("id", "#button1")
        // const button2 = document.createElement("input");
        // button2.setAttribute("id", "#button2")

        const card = document.createElement("div");
        const cardu = card.setAttribute('class', 'card')
        const section = document.querySelector(".section")
        const sda = document.querySelector(".endhiisda")
        
        function zalhuu(e){
               
            const class1 = document.createElement('div');
            const c1 = class1.setAttribute('class' , 'card-body');
            const eName = document.createElement("p");
            const textName = document.createTextNode(" name : " + e.name);
            const eHeight = document.createElement("p");
            const textHeight = document.createTextNode(" height: " + e.height );
            const eMass = document.createElement("p");
            const textMass = document.createTextNode(" mass: " + e.mass );
            const eEye = document.createElement("p");
            const textEye = document.createTextNode(" eye: " + e.eye );
            const eGender = document.createElement("p");
            const textGender = document.createTextNode(" gender: " + e.gender );
            eName.appendChild(textName);
            eName.appendChild(document.createElement('br'));
            eName.appendChild(textMass);
            eName.appendChild(document.createElement('br'));
            eName.appendChild(textEye);
            eName.appendChild(document.createElement('br'));
            eName.appendChild(textHeight)
            eName.appendChild(document.createElement('br'));
            eName.appendChild(textGender)
            eName.appendChild(document.createElement('br'));
            console.log(eName);
            class1.appendChild(eName)

            class1.setAttribute('id', 'psdave')
            sda.appendChild(class1)

           
        }
       

        document.querySelector("#button1").addEventListener('click', ()=>{
            filt.forEach((e, i) =>{
             zalhuu(e)

            })
        })
        document.querySelector("#button2").addEventListener('click', ()=>{
            filt1.forEach((e, i) =>{
              
            zalhuu(e)
            })
        })
        document.querySelector("#button3").addEventListener('click', ()=>{
            const myDiv = document.querySelector("#psdave");
            const parent = myDiv.parentNode;
            parent.removeChild(myDiv)
            sda.remove()
        })

        function max(a, b){
            if (a>b) {
                return a
            }else{
                return b
            }
        }

        document.querySelector("#btn1").addEventListener('click', ()=>{
            n = prompt("Ehnii toogo oruulna uu")
            b = prompt("hoyrdh toogo oruulna uu")
            console.log( max(n, b));
        })


        // characters.forEach((e, i) => {
            
            // eName.appendChild(textName);
            // eName.appendChild(br);
            // eName.appendChild(textMass);
            // eName.appendChild(br);
            // eName.appendChild(textEye);
            // eName.appendChild(br);
            // eName.appendChild(textHeight)
            // eName.appendChild(br);
            // eName.appendChild(textGender)
            // eName.appendChild(br);

        // })
    


    // document.getElementById("txt").addEventListener('click', () =>{
    //     var executed = false;
        
    // console.log('hi');
    // let a = document.createElement('input');
    // a.setAttribute('type', 'text');
    // a.setAttribute('id', 'input1')
    // a.setAttribute('placeholder', 'Enter username')
    // let a1 = document.createElement('input');
    // a1.setAttribute('type', 'password');
    // a1.setAttribute('id', 'password');
    // a1.setAttribute('placeholder', 'Enter password')
    // let a2 = document.createElement('input');
    // a2.setAttribute('value', 'signup')
    // a2.setAttribute('type', 'button')
    // a2.setAttribute('id', 'btn1')
    // a2.setAttribute("href", "index.html")
    // let c = document.createTextNode("hi");
    // let b = document.getElementById('div1');
    // a.appendChild(c);
    // b.appendChild(a);
    // b.appendChild(a1);
    // b.appendChild(a2);

    // document.getElementById('btn1').addEventListener('click', ()=>{
    //     document.getElementById('btn1').setAttribute('value', 'login');
        
    //     const utga = document.getElementById('input1').value;
    //     const utga1 = document.getElementById('password').value;
        
    //     document.getElementById('btn1').addEventListener('click', ()=>{
            
    //     const username = document.getElementById('input1').value;
    //     const password = document.getElementById('password').value;
    //     if(username == utga && utga1 == password){
    //         alert("amjilttai nevterlee")

    //     }else{
    //         alert("username passwordo shalgana uu")
    //     }
    //     })

    // })
    // })