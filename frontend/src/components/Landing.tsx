import ProductCard from './ProductCard'

export default function Landing() {
  return (
    <div>
        <div className='hero-section'>  
            <h3>Cravings to Usage</h3>  
            <p>
               Buy here whatever but you have to pay the paisa first.
            </p>   
              <button>
                   Buy now
              </button>
        </div>
        <div className='cards-container'>
             <div className='card-section'>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
             </div>
              <div className='card-section'>
                   <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
              </div>
        </div>
    </div>
  )
}
