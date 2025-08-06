function walkDog(){
    return new Promise((resolve,reject)) => {
        setTimeout(() =>{
            const dogWalked=true;//
            if (dogWalked){
                resolve("you walked the dog");

            } else {
                reject("you didn't walk the dog");
            
        });
    }
}