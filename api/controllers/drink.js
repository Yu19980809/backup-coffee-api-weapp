import Drink from '../model/drink.js'

import { drinks } from '../constants/index.js'

const fetchAllDrinks = async ( req, res ) => {
  try {
    const drinks = await Drink.find()

    // 将drinks根据种类进行划分
    let newDrinks = []
    drinks.map( drink => {
      if ( newDrinks.length === 0 ) {
        newDrinks.push( { category: drink.category, drinks: [ drink ] } )
      } else {
        let res = newDrinks.some( item => {
          if ( item.category === drink.category ) {
            item.drinks.push( drink )
            return true
          }
        } )

        if ( !res ) {
          newDrinks.push( { category: drink.category, drinks: [ drink ] } )
        }
      }
    } )

    res.status( 200 ).json( { success: true, data: newDrinks } )
  } catch (error) {
    res.status( 500 ).send( error )
  }
}

const generateDrinks = async ( req, res ) => {
  try {
    const len = drinks.length

    for ( let i = 0; i < len; i++ ) {
      await Drink.create( { ...drinks[ i ] } )

      if ( i === len - 1 ) {
        res.status( 201 ).json( { success: true, message: `${ len } drinks has been created` } );
      }
    }
  } catch (error) {
    res.status( 500 ).send( error )
  }
}

export {
  fetchAllDrinks,
  generateDrinks
}
