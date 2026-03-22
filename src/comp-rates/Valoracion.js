import React, { useState } from 'react'

function Valoracion() {
const [rating, setRating] = useState(0);

  const emoji = (rating) => {
    if (rating === 0) return '🤔';
    if (rating === 1) return '😞';
    if (rating === 2) return '🙂';
    if (rating === 3) return '😊';
    if (rating === 4) return '😃';
    if (rating === 5) return '🎉';
    return '⭐';
  };

  return (
    <div style={{
        display: 'flex',
        gap: '15px',
        fontSize: '30px',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'3rem'
        
        
    }}>
        <p>Calificanos  !!!</p>

        {[1,2,3,4,5].map((star)=>{
            return (
                <span
                    key={star}
                    onClick={() => setRating(star)}
                    style={{
                        cursor: 'pointer',
                        color: star <= rating ? 'gold' : '#cfcccc',
                        
                        
                    }}
                >
                    ★
                </span>
            );
        })}

        {rating > 0 && (
        <p style={{color: rating === 0 ? 'gray' : rating <= 2 ? 'black' : '#09ff00'}}>Tu valoracion {rating === 0 ? '' : `${rating} ${emoji(rating)}`} </p>
         )} 
    </div>
       

  )
}

export default Valoracion