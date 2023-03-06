'use strict'
let btnSave = document.querySelector( '#btnSave' );
console.log( btnSave );
let btnRaffle = document.querySelector( '#btnRaffle' );
console.log( btnRaffle );
let nodoInput = document.querySelector( '.main__input' );
console.log( nodoInput );

// let str_raffle = '';
// str_raffle = '<div class="main__name">' + valueInput + '</div>';
let nodoSaved = document.querySelector( '.main__solution' );
// let nodoTry = document.querySelector( '#try' );
// nodoTry.innerHTML = valueInput;

btnSave.addEventListener( 'click', function(){
    let valueInput = nodoInput.value; // ""
    console.log( valueInput );
    console.log('You saved this item properly!')
    if (valueInput !== ''){
        let nodoDiv = document.createElement('div');
        nodoDiv.classList.add('main__name');
        nodoDiv.innerHTML = valueInput;
        nodoSaved.append( nodoDiv );
    }else{}
})
btnRaffle.addEventListener( 'click', function(){
    let listaSorteo = document.querySelectorAll( '.main__name' );
    console.log( 'array con inputs', listaSorteo );
    let anterior = document.querySelector( '.main__name.active' )
    if(anterior){
        anterior.classList.remove( 'active' );

    }
    let arrayMax = listaSorteo.length;
    let random = Math.random() * arrayMax;
    let chosen = Math.trunc(random); // 
    listaSorteo[ chosen ].classList.add( 'active' );
    let interval = setInterval( function(){
        let arrayMax = listaSorteo.length;
        let random = Math.random() * arrayMax;
        let chosen = Math.trunc(random); // 
        let anterior = document.querySelector( '.main__name.active' )
        anterior.classList.remove( 'active' );
        listaSorteo[ chosen ].classList.add( 'active' );  
        } , 100 );
    let time_out = setTimeout( function(){
        clearInterval( interval );
    }, 1000)


    // let count = 0;
    // let ref_timeout = setInterval( function(){
        //     for( let i =0 ;i < listaSorteo.length; i++ ){
            //         listaSorteo[i].classList.add( 'active' );
            //         listaSorteo[i].classList.remove( 'active' );
            //     }
            // } , 1000 );
    
    // listaSorteo[ chosen ].classList.remove( 'active' 
    // let contador = 0;
    // let ref = setInterval( function(){
    //     for( let i=0; i < listaSorteo.length;i++ ){
    //         listaSorteo[i].classList.remove( 'active' );
    //     }
        
    //     if( contador> listaSorteo.length-1 ){
    //         contador = 0;
    //         clearInterval( ref )
    //     }

    //     listaSorteo[ contador ].classList.add('active')
        
    //     contador++

    // },100 )
    // // Me aseguro de que nadie tenga 
    // for( let i=0; i < listaSorteo.length;i++ ){
    //     listaSorteo[i].classList.remove( 'active' );
    // }

    // console.log( listaSorteo.length );
    // let arrayMax = listaSorteo.length;
    // let random = Math.random() * arrayMax;
    // console.log( random )
    // let chosen = Math.trunc(random); // 
    // listaSorteo[ chosen ].classList.add( 'active' );
})
// como resetear btnRaffle
