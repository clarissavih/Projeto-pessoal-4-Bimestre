import Profile from './components/Profile'

export default function App() {
  return( 
        <div>
          <Profile 
           img={'./logo.png'}
           name={'Luxury Closet'} 
           bio={ <div>
           Loja de Roupas<br />
           Ótima qualidade<br />
           Fazemos entrega<br />
          </div>  
          }
           contact={'+55 (85) 994360542'} 
           instagramUrl={'https://www.instagram.com/is.luxurycloset?igsh=NGN2dnY3cnZzY3pw&utm_source=qr'}
           
            
           />
        </div> 
   
  )
}
