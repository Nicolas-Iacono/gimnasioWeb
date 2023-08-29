// function toBe(val){
//     if(val === expect(val)){
//         return true
//     }else{
//         return 'not equal'
//     }
// }

// function notToBe(val){
//     if(val !== expect(val)){
//         return true
//     }else{
//         return 'equal'
//     }
// }


// var expect = function(val) {
//     let objeto = {
//         toBe : function(expectedVal){
//             if(val === expectedVal){
//                 console.log(true) 
//             }else{
//                 console.log('not equal')
//             }
//         },
//         notToBe : function(expectedVal){
      
//             if(val !== expectedVal){
//                 console.log(true) 
    
//             }else{
//                 console.log('equal') 
    
//             }
//         }
//     }
//     return objeto
//     }
    
//     let objeto ={
//         'equal':expect(5).toBe(5)
//     }
//     console.log(objeto)


//     expect(3).notToBe(5);

function expect(val){
    return {
        toBe:(expectedVal)=>{
            if(val !== expectedVal)throw new Error("Not Equal");
            else return true;
        },
        notToBe: (expectedVal)=>{
            if(val === expectedVal)throw new Error("Equal");
            else return true;
        }
    }
};

console.log(expect(5).notToBe(3));
console.log(expect(5).toBe(5));
