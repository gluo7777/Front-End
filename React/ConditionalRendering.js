const ele = document.querySelectorAll('.placeholder');
// 8

const UserDetails = props => props.authenticated ? 
(
    <div>
        <p>Name: {props.user.name}</p>
        <p>Name: {props.user.email}</p>
    </div>
)
:(
    <p>You do not have permission to view this page.</p>
);

const userInfo = {
    name: "William Luo",
    email: "gluo7777@gmail.com"
}

ReactDOM.render(
    <UserDetails authenticated={true} user={userInfo}/>,
    ele[8]
);

ReactDOM.render(
    <div>
    <h1>Unauthenticated Flow:</h1>
    <UserDetails authenticated={false} user={userInfo}/>
    </div>,
    ele[9]
);

// inline if with &&
const UserDetails2 = props => (
    <div>
        <h1>User Information</h1>
        <h2>{props.authenticated ? 'Authenticated' : 'Unauthenticated'} Flow</h2>
        {props.authenticated && 
            <div>
                <p>Name: {props.user.name}</p>
                <p>Name: {props.user.email}</p>
            </div>
        }
        {/* Return null to hide an element */}
        {props.authenticated ? null : <h3>You are not logged in!</h3>}
    </div>
);

ReactDOM.render(<UserDetails2 authenticated={false} user={userInfo}/>, ele[10]);