// Bubble sort
function bubbleSort(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// Insertion sort
function insertionSort(arr){
    let n = arr.length;
    for (let i=0;i<n;i++){
        // Choosing the first element in our unsorted subarray
        let current = arr[i];
        // The last element of our sorted subarray
        let j = i-1;
        while((j>-1)&&(current<arr)) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}
let arr = [4,6,2,3,8,6,5,3];
console.log(bubbleSort(arr));