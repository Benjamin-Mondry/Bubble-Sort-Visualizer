import React from 'react';
import {bubbleSort} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';


const ANIMATIONS_SPEED = 20;
const NUMBER_OF_BARS = 120;
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
    bubbleSort(){
        
       const animations = bubbleSort(this.state.array);
       const arrayBars = document.getElementsByClassName('array-bar');
       for(let i =0; i < animations.length; i++){
        const isColourChange = i % 3 !==2;
        if(isColourChange){
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const colour = i % 3 === 0? SECONDARY_COLOUR : PRIMARY_COLOUR;
            setTimeout(() => {
                barOneStyle.backgroundColor = colour;
                barTwoStyle.backgroundColor = colour;
            }, i * ANIMATIONS_SPEED);
        }else{
            setTimeout(() => {
                const scaling = 5
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight*scaling}px`;
            }, i *ANIMATIONS_SPEED);
        } 
       }
    }
    testSort(){
        const javaScriptSortedArray = this.state.array
            .slice()
            .sort((a,b) => a-b);
        const array = bubbleSort(this.state.array);
        console.log(array);
        console.log(arraysAreEqual(javaScriptSortedArray, array))
    }
    render(){
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