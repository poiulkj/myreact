import React, { Component } from 'react';

function Welcom(props) {
    return <div>hello,{props.name}</div>;
}

function Tick(){
    return <div>It is{new Date().toLocaleTimeString()}</div>
}

function format(date){
    return date.toLocaleDateString();
}

function Comment(props){
    return(
         <div>
            <img src={props.author.url}/>
            <div>{props.author.name}</div>
            <div>{props.text}</div>
            <div>{format(props.date)}</div>
         </div>
    );
}

const comm = {
    text:'enjoy react',
    author:{
        name:'kitty',
        url:'http://placekitten.com/g/64/64'
    },
    // date: new.Date()
}

export default class Comlist extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };

        setInterval(() => {
            this.setState({
            date:new Date()
          });
        }, 1000);
    }

    render(){
        return(
            <div> 
                <div><Welcom name = 'sally'/></div>
                <div><Welcom name = 'tom'/></div>
                <div><Welcom name = 'anna'/></div>
                <div><Tick/></div>  
                <div>{this.state.date.toLocaleTimeString()}</div>
                <div><Comment author={comm.author} text={comm.text} date={this.state.date}/></div>
            </div>      
        );      
    } 
}

