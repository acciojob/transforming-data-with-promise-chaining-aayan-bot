//your JS code here. If required.
//your JS code here. If required.




	
// let promise1=()=>{
// 	return new Promise((resolve)=>{
//        
// 		resolve(data)
// 	})
// }

async function first() {
    return new Promise ((resolve)=>{
        setTimeout(() => {
             let data=document.getElementById("ip").value
             resolve(data)
             console.log(data)
        }, 2000);
       
    })
}
async function multiply(params) {
    return new Promise ((resolve)=>{
        setTimeout(() => {
             resolve(params*2)
        }, 2000);
       
    })
}
async function subs(params) {
    return new Promise ((resolve)=>{
        setTimeout(() => {
             resolve(params-3)
        }, 1000);
       
    })
}
async function divide(params) {
    return new Promise ((resolve)=>{
        setTimeout(() => {
             resolve(params/2)
        }, 1000);
       
    })
}
async function add(params) {
    return new Promise ((resolve)=>{
        setTimeout(() => {
             resolve(params+10)
        }, 1000);
       
    })
}
async function display(){
		let res1=await first()
        let res2=await multiply(res1);
        let res3=await subs(res2);
        let res4=await divide(res3);
        let res5=await add(res4);

        document.getElementById("output").innerHTML=`
        Result: ${res1}
        Result: ${res2}
        Result: ${res3}
        Result: ${res4}
       Final Result: ${res5}
        `

	}
    


