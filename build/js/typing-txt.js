'use strict';

const arr = [" Developer.", " Freelancer."];
printTextSequentially(arr);

async function printTextSequentially(arr) {
    let index = 0;
    while (true) {
        const text = arr[index];
        for (let j = 0; j < text.length; j++) {
            await new Promise(resolve => setTimeout(resolve, 100));
            document.getElementById("typing-txt").innerHTML += text[j];
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        document.getElementById("typing-txt").innerHTML = "";
        index = (index + 1) % arr.length;
    }
}
