import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

// Stateless - Funcional

const StudentInfo = props => {
    const [time, setTime] = useState(0);
    
    useEffect(
        () => {
            setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000);
        }, []
    );

    return (
        <div>
            <h1>Informações do Estudante:</h1>
            <p>Nome: Otacilio Maia</p>
            <p>Interesses: React, Git e GitHub</p>
            <p>Tempo de usuário logado: {time} </p>
            <Button color="primary" variant="contained">Clique aqui</Button>
        </div>
    )
} 

export default StudentInfo;