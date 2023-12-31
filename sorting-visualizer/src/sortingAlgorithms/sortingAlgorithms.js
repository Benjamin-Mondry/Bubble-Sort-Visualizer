export const bubbleSort = array =>{
    const size = array.length
    const sortedArray = array.slice()
    for(let i =0; i<size;i++){
        for(let j = 0; j<size;j++){
            const temp = sortedArray[i]
            if(sortedArray[i] > sortedArray[j]){
                sortedArray[i] = sortedArray[j]
                sortedArray[j] = temp
            }
        }
    }
    return sortedArray
};