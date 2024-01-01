export function bubbleSort(array){
    const animations = []
    let arr = array.slice(0);
    const size = arr.length 
    for(let i =0; i< size;i++){
        for(let j = 0; j < size -i-1;j++){
            //animations.push([j, j+1])
            //animations.push([j, j+1])
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                animations.push([j, j+1])
                animations.push([j, j+1])
                animations.push([j, j+1])
                
                //values we compare, so we push to change colour once.
                // push again to revert colour 
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
    }
    return animations
};