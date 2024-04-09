export function getBubbleSort(array){
    const animations = []
    const arr = array.slice();
    bubbleSort(arr,animations)
    
    return animations
}
function bubbleSort(arr,animations){
    const size = arr.length 
    var swapped = false;
    for(let i =0; i< size;i++){
        swapped = false;
        for(let j = 0; j < size -i-1;j++){
            animations.push([j, j+1]) // push indexes of j and j+1 to change colour 
            animations.push([j, j+1]) //duplicate push to revert colour change 
            if(arr[j] > arr[j+1]){
                swapped = true;
                animations.push([j, arr[j+1]])  // pushes index,value pair of adjacent element
                animations.push([j+1, arr[j]])  // pushes index,value pair of current element 
                let temp = arr[j]                       
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }else{
                animations.push([-1,-1]) // place holder if no swap 
                animations.push([-1,-1]) // place holder if no swap 
            }
        }
        if(!swapped){
            return;
        }
        
    }
};