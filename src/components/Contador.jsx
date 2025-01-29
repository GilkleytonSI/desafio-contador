import React, { useState } from 'react';

const Contador = () => {
    // Definindo o estado do contador
    const [contador, setContador] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)} disabled={contador === 0}>
                Decrementar
            </button>
            <button onClick={() => setContador(0)}>Resetar</button>
        </div>
    );
};

export default Contador;
