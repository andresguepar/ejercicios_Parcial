let is_open = true;
let client = prompt("Ingrese si es cooperativa o externo");
let pay = prompt("Ingrese que tipo de atencion necesita")

if(client === 1){
    coo();

}

let modulos = {
    mod1:'cuotas',
    mod2:'admin',
    mod3:'asesoria'
}


let aten = {
    pagos:{
        cuotas:"",
        admin:"",
    } 
}

function coo() {
	
    
    let order = ( time, aten ) => {
	 return new Promise( ( resolve, reject )=>{
	        if( is_shop_open ){
	    
	          setTimeout(()=>{
	    
	           // aten is 👇 getting done here
	            resolve( aten() )
	    
	    // Setting 👇 time here for 1 aten
	           },time)
	         
	        }
	    
	        else{
	          reject( console.log("Is closed") )
	        }
	    
	      })
	      
	    }
	// step 1
	order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))
	
	// step 2
	.then(()=>{
	  return order(0000,()=>console.log('production has started'))
	})
	

    .catch(()=>{
        console.log("Customer left")
      })
      .finally(()=>{
        console.log("end of day")
      }) 
	
}

function pagos (){
    let ask = prompt("Ingrese el tipo de pago");
    if
}
