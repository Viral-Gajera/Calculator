
let answer = document.getElementById('answer');
let main = document.getElementById('main')


// ! selecting 1 to 9 and 0/00/. button
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let b0 = document.getElementById('b0');
let b00 = document.getElementById('b00');
let dot = document.getElementById('dot');

// ! selecting AC, DEL and = 
let AC = document.getElementById('AC'); 
let DEL = document.getElementById('DEL');
let eql = document.getElementById('eql');

// ! selecting operator
let per = document.getElementById('per');
let div = document.getElementById('div');
let mul = document.getElementById('mul');
let sub = document.getElementById('sub');
let add = document.getElementById('add');



function addContent (){
    let value = this.getAttribute('value');
    console.log(value);
    answer.value += value;
}

b1.addEventListener( 'click', addContent );
b2.addEventListener( 'click', addContent );
b3.addEventListener( 'click', addContent );
b4.addEventListener( 'click', addContent );
b5.addEventListener( 'click', addContent );
b6.addEventListener( 'click', addContent );
b7.addEventListener( 'click', addContent );
b8.addEventListener( 'click', addContent );
b9.addEventListener( 'click', addContent );
b0.addEventListener( 'click', addContent );
b00.addEventListener( 'click', addContent );
dot.addEventListener( 'click', addContent );



per.addEventListener( 'click', addContent );
div.addEventListener( 'click', addContent );
mul.addEventListener( 'click', addContent );
sub.addEventListener( 'click', addContent );
add.addEventListener( 'click', addContent );


eql.addEventListener('click', function(){
    let string = answer.value
    if( string.isInteger ){
        console.log('integer');
    }
    let evalution = eval(string);
    answer.value = Number(evalution).toFixed(5);
});

AC.addEventListener('click', function(){
    answer.value = '';
} );


DEL.addEventListener('click', function(){
    let lenght = String(answer.value).length
    answer.value = answer.value.substring(0, lenght-1)
});

// main.addEventListener( 'keypress', function(event){
//     if( String(event.key) === 'Enter' ){
//         let string = String(answer.value);
//         console.log(string);
//         answer.value = eval(string);
//     }

// } )