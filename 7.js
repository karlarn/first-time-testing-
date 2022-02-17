const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const html=(object)=>{
    const string= `<section id="${object.id}">
    <h1>${object.manufacturer} ${object.make}</h1>
	<div>Model: ${object.model}</div>
	<div>Memory: ${object.specs.memory} GB</div>
	<div>Hard drive space: ${object.specs.hardDrive} GB</div>
	<div>Processor speed: ${object.specs.processor} Ghz</div>
</section>`
return string
}

console.log(html(computer))


// FUNCTION FLOW


const buyClay=()=>{
    const clay={
    }
    return clay
}

const makePottery=(object)=>{
    object.shape='Bowl'

    return object
}

const bisqueFire=(object)=> {
    object.readyForGlazing = true
    return object
}

const glazePottery=(object)=>{
    if (object.readyForGlazing===true){
        object.glazing='Midnight Blue'
    }
    else{`Make sure you bisque fire the pottery before you glaze it.`}
    return object
}

const finalFiring=(object,temp)=>{
    if (temp>1200){
        object.cracked=true
    }
    else {object.cracked=false}
    return object
}

const start=buyClay()
const pottery=makePottery(start)
const fire=bisqueFire(pottery)
const glaze=glazePottery(fire)
const final=finalFiring(glaze)

console.log(final)
