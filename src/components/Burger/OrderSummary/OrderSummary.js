import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

const OrderSummary = props => {

    const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
        return (
            <li key={igkey}>
                <span>{props.ingredients[igkey]}</span>
            </li>
        );
    });

    return (
        <Auxiliary>
            <h2>Your Order</h2>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Auxiliary>
    );
};

export default OrderSummary;