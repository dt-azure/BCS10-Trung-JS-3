var arr = [];
var floatArr = [];

function clearInput() {
    document.getElementById("num-input").value = "";
    document.getElementById("arr-input").value = "";
}

function isPrime(num) {
    if (num > 1) {
        for (let i = 2; i <= Math.floor(num / 2); i++) {
            if (num % 2 === 0) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

function getNum() {
    var positiveSum = 0;
    var positiveNum = "";
    var positiveCount = 0;
    var negativeNum = "";
    var negativeCount = 0;
    var numCompare = "";
    var smallestPositive = -1;
    var evenNum = -1;
    var firstPrime = -1;

    arr.push(document.getElementById("num-input").value * 1);
    
    document.querySelector(".result-print.mt-4").innerHTML = `<p>Mảng hiện tại: <span class="result-style">[${arr}]</span></p>`;
    clearInput();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveSum += arr[i];
            positiveNum += arr[i] + ", ";
            positiveCount++;
            if ((arr[i] < smallestPositive) || (smallestPositive === -1)) {
                smallestPositive = arr[i];
            }
        }
        else {
            negativeNum += arr[i] + ", ";
            negativeCount++;
        }
        if (arr[i] % 2 === 0) {
            evenNum = arr[i];
        }
    }

    if (positiveCount > negativeCount) {
        numCompare = "Có nhiều số dương hơn số âm."
    }
    else if (positiveCount < negativeCount) {
        numCompare = "Có nhiều số âm hơn số dương."
    }
    else {
        numCompare = "Số lượng số dương và số âm bằng nhau."
    }

    if (smallestPositive === -1) {
        smallestPositive = "Mảng không có số dương";
    }

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            firstPrime = arr[i];
            break;
        }
    }

    if (firstPrime === -1) {
        firstPrime = "Mảng không có số nguyên tố";
    }
 
    document.querySelector(".result-print.mt-4").innerHTML += 
    `
    <p>Các số dương trong mảng: <span class="result-style">${positiveNum.slice(0,-2)}</span></p>
    <p>Các số âm trong mảng: <span class="result-style">${negativeNum.slice(0,-2)}</span></p>
    <p>Số lượng số dương: <span class="result-style">${positiveCount}</span> --- Số lượng số âm: <span class="result-style">${negativeCount}</span></p>
    <p class="result-style">${numCompare}</p>
    <p>Tổng các số dương: <span class="result-style">${positiveSum}</span></p>
    <p>Số nhỏ nhất: <span class="result-style">${Math.min(...arr)}</span></p>
    <p>Số dương nhỏ nhất: <span class="result-style">${smallestPositive}</span></p>
    <p>Số chẵn cuối cùng: <span class="result-style">${evenNum}</span></p>
    <p>Mảng sắp xếp theo thứ tự tăng dần: <span class="result-style">${arr.toSorted(function(a,b) {
        return a - b;
    })}</span></p>
    <p>Số nguyên tố đầu tiên: <span class="result-style">${firstPrime}</span></p>
    `
}

function positionSwap() {
    if (arr.length === 0) {
        return;
    }

    var originalArr = arr.map((x) => x);
    var firstIndex = document.getElementById("first-index").value * 1;
    var secondIndex = document.getElementById("second-index").value * 1;
    var tempNum = arr[firstIndex];
    
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tempNum;

    document.querySelectorAll(".result-print.mt-3")[0].style.display = "block";
    document.querySelectorAll(".result-print.mt-3")[0].innerHTML = 
    `
    <p>Mảng ban đầu: <span class="result-style">[${originalArr}]</span></p>
    <p>Đổi phần tử ở vị trí <span class="result-style">${firstIndex}</span> với phần tử ở vị trí <span class="result-style">${secondIndex}</span></p>
    <p>Mảng hiện tại: <span class="result-style">[${arr}]</span></p>
    `;
}

function floatCount() {
    var intCount = 0;
    var intNum = "";
    
    floatArr.push(document.getElementById("arr-input").value * 1);
    clearInput();

    for (let i = 0; i < floatArr.length; i++) {
        console.log(floatArr[i]);
        if (Number.isInteger(floatArr[i])) {
            intCount++;
            intNum += floatArr[i] + ", ";
        }
    }

    document.querySelectorAll(".result-print.mt-3")[1].style.display = "block";
    document.querySelectorAll(".result-print.mt-3")[1].innerHTML = 
    `
    <p>Mảng hiện tại: <span class="result-style">[${floatArr}]</span></p>
    <p>Mảng trên có <span class="result-style">${intCount}</span> số nguyên.</p>
    <p>Các số nguyên trong mảng trên: <span class="result-style">${intNum.slice(0,-2)}</span></p>
    `;
}