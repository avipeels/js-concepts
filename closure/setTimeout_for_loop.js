for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => {
            /**
             * By the time the setTimeout function runs i is already 5. They are 5 different functions that 
             * are closing over exact global scope that is having one i value i.e. 5. There is not a variable
             * created per iteration.
             * 
             * By enclosing in iife, we will have unique scope for each iteration
             * */
            console.log("1:" + i);
        }, i * 1000);
    })(i);
}