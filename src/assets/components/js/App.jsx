import React from 'react'
import omelette from "../../images/omelette.jpeg"



export default function App() {
    return (
        <>
                <main className="container">

            <img className='image' src={omelette} alt="omelette" />
          
         <h1>Simple Omelette Recipe</h1>
             <p className='description'>
             An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
             to perfection, optionally filled with your choice of cheese, vegetables, or meats.
             </p>             
              
              <div className="time">
             <h4 className='time-heading'>Preparation time</h4>
             <ul className='time-list'>
                 <li><span className='time-title'>Total</span>: Approximately 10 minutes</li>
                 <li><span className='time-title'>Preparation</span>: 5 minutes</li>
                 <li><span className='time-title'>Cooking</span>: 5 minutes</li>
             </ul>             
              </div>
             

             <h3>Ingredients</h3>             

             <ul className='ingredient-list'>
                 <li>2-3 large eggs</li>
                 <li>Salt, to taste</li>
                 <li>Pepper, to taste</li>
                 <li>1 tablespoon of butter or oil</li>
                 <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
             </ul>             

             <h3>Instructions</h3>
             <ol>
                 <li><span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
             You can add a tablespoon of water or milk for a fluffier texture.
             </li>             

                 <li><span>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
                
                 <li><span>Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
             the eggs evenly coat the surface.
             </li>             

                 <li><span>Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the 
                 middle, sprinkle your chosen fillings over one half of the omelette.
                 </li>
                
                 <li><span>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the 
                 fillings. Let it cook for another minute, then slide it onto a plate.
                 </li>
                
                 <li><span>Enjoy</span>: Serve hot, with additional salt and pepper if needed.
                 </li>
             </ol>             
             
             

             <h3>Nutrition</h3>             

             <p className='values'>The table below shows nutritional values per serving without the additional fillings.</p>             
             

             <div className =" parent ">
              <div className =" div1">Calories </div>
              <div className =" div2">277kcal </div>
              <div className="item-border row1"></div>
              <div className =" div3">Carbs </div>
              <div className =" div4">0g </div>
              <div className="item-border row2"></div>
              <div className =" div5">Protein</div>
              <div className =" div6"> 20g</div>
              <div className="item-border row3"></div>
              <div className =" div7"> Fat</div>
              <div className =" div8">22g</div>
              </div >
                </main>
                   
        </>
    )
}