import React from 'react'

const BasicTypes = () => {

  const name: string = 'Bryan';
  const age: number = 21;
  const isActive: boolean = true;
  const powers: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return (
    <div>
        <h3>Tipos básicos</h3>
        {name}, {age}, {isActive ? 'true' : 'false'}
        <br />
        {powers.join(', ')}
    </div>
  )
}

export default BasicTypes
