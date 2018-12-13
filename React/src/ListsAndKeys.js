// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

// it's bad practice to use index as keys b/c they may change
// treat lists as maps

// keys are hidden, only used by React

const Numbers = props => 
<ol>
    {
        props.numbers.map((v,k) => 
            <li key={k}>
            {v}
            </li>
        )
    }
</ol>;

ReactDOM.render(
    <Numbers numbers={[1,2,3,4,5,6,7,8,9,10]}/>,
    next()
);

ReactDOM.render(
    <Numbers numbers={['a','b','c']}/>,
    next()
);

const Person = (id,fName,lName) => {return {id:id, first: fName, last: lName}};

const Contact = props => (
    <li>
        <table>
            <tbody>
                <tr>
                    <td>First Name: </td><td>{props.person.first}</td>
                </tr>
                <tr>
                    <td>Last Name: </td><td>{props.person.last}</td>
                </tr>
            </tbody>
        </table>
    </li>
);

const Contacts = props => 
<ol>
    {
        props.lst.map(person => <Contact key={person.id} person={person}/>)
    }
</ol>;

ReactDOM.render(
    <Contacts lst={[
        Person(24,'William','Luo'),
        Person(13,'Lydia','Buu'),
        Person(9,'Jack','Balls')
    ]}/>,
    next()
);