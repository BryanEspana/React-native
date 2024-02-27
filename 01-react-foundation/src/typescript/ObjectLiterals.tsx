interface Person{
    fullName: string;
    age: number;
    address: Address;
}
interface Address{
    country: string;
    houseNo: number;
}


const ObjectLiterals = () => {
    const person: Person = {
        fullName: 'Bryan España',
        age: 21,
        address: {
            country: 'Guatemala',
            houseNo: 123
        }
    }

    person.address.houseNo = 456

  return (
    <div>
      <h3>ObjectsLiterals</h3>
        <pre>
        {JSON.stringify(person, null, 2)}
        </pre>
    </div>
  )
}

export default ObjectLiterals
