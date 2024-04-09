import React from 'react';
import {getBubbleSort} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';


const ANIMATIONS_SPEED = 1;
const NUMBER_OF_BARS = 125;
const PRIMARY_COLOUR = 'turquoise';
const SECONDARY_COLOUR = 'red';



export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
        };
    }
    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array = [];
        for(let i = 0;i < NUMBER_OF_BARS;i++){
            array.push(randomIntFromInterval(5,730));
        }
        this.setState({array});
    }
    bubbleSort() {
        const animations = getBubbleSort(this.state.array); // get animation array 
        for (let i = 0; i < animations.length; i++) { // iterate over animations 
            const isColourChange = (i % 4 === 0) || (i % 4 === 1); // colour change every 4th iteration 
            const arrayBars = document.getElementsByClassName('array-bar'); // get bar CSS 
    
            if (isColourChange === true) {
                const colour = i % 4 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR; // if 0, secondary colour applied, else primary colour 
                const [barOneIdx, barTwoIdx] = animations[i]; // sets bar1,bar2 to the animation at that index. 
                const barOneStyle = arrayBars[barOneIdx].style; // styles bar 1 
                const barTwoStyle = arrayBars[barTwoIdx].style; // styles bar 2 
    
                setTimeout(() => { // delay to let animation look seamless 
                    barOneStyle.backgroundColor = colour; // apply background colour 
                    barTwoStyle.backgroundColor = colour; // apply background coour 
                }, i * ANIMATIONS_SPEED); // the speed of the iteration is multiplied by desired value 
            } else {
                const [barIdx, newHeight] = animations[i]; // set bar and height to animation at that index 
                if (barIdx === -1) { // if empty index, continue animation 
                    continue;
                }
                const barStyle = arrayBars[barIdx].style; // style the bar even if its not swapped 
                setTimeout(() => { // timeout again to apply height 
                    barStyle.height = `${newHeight}px`; 
                }, i * ANIMATIONS_SPEED); 
            }
        }
    }
    
    testSort(){
        const javaScriptSortedArray = this.state.array
            .slice()
            .sort((a,b) => a-b);
        const array = getBubbleSort(this.state.array);
        console.log(array);
        console.log(arraysAreEqual(javaScriptSortedArray, array))
    }
    render(){
        console.log("test434343", this.state);
        const {array} = this.state;

        return(
            <div className = "array-container">
                {array.map((value, idx) => (
                    <div className = "array-bar" 
                    key = {idx}
                    style = {{height: `${value}px`}}>
                    </div>
                ))}
                <button onClick = {() => this.resetArray()}>Generate New Array</button>
                <button onClick = {() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }

}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min+ 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i =0; i<arrayOne.length;i++){
        if(arrayOne[i]!== arrayTwo[i]){
            console.log(arrayOne[i], arrayTwo[i]);
            return false;
        }
    }
    return true;
}