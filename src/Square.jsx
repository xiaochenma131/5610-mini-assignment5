import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;

    let backgroundColor = 'white';
    if (symbol === '  ') {
        backgroundColor = 'black';
    } else {
        backgroundColor = 'white';
    }

    const dispatch = useDispatch();

    if (symbol === '  ') {
        return (<div onClick={() => dispatch(
            {
                type: 'boardClickReduce',
                x: props.x,
                y: props.y,
            }
        )} id="square" class={backgroundColor}>

        </div>);
    } else {
        return (<div onClick={() => dispatch(
            {
                type: 'boardClick',
                x: props.x,
                y: props.y,
            }
        )} id="square" class={backgroundColor}>

        </div>);
    }
}