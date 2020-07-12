import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';
const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(
        (igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            }).reduce((arr, el) => {
                return arr.concat(el)
            }, []);
        }
    );

    // let transformedIngredients = Object.keys(props.ingredients).map(function (key) {
    //     return [...Array(props.ingredients[key])].map((_, i) => {
    //         return <BurgerIngredient key={key + i} type={key} />;
    //     }).reduce((arr, el) => {
    //         return arr.concat(el)
    //     }, []);
    // });

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Add Ingredients.</p>;
    }

    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

            
        </div>
    );
};

export default burger;