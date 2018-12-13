// Containment
// props.children
// arbitrary elements as children

const CustomBox = (props) => <div className={props.boxType}>
    {props.children}
</div>;

const Paragraph = (props) => <CustomBox boxType="blue-box">
    <h1>{props.title}</h1>
    <pre>   {props.body}</pre>
</CustomBox>

// Specialization
// Extending a generic object via composition
const MyParagraph = <Paragraph
title="Components and Containment Pattern"
body="Composition is better than inheritance.
React has decent support for composition."
/>;

ReactDOM.render(MyParagraph, next());

// You can literally pass anything as props
// Remember JSX gets converted into Javascript objects
const SplitBox = (props) => <div className="split-box">
    <CustomBox boxType={props.leftBoxType}>
        {props.leftParagraph}
    </CustomBox>
    <CustomBox boxType={props.rightBoxType}>
        {props.rightParagraph}
    </CustomBox>
</div>;

const Paragraph2 = (props) => <div>
    <h1>{props.title}</h1>
    <pre>   {props.body}</pre>
</div>;

ReactDOM.render(
<SplitBox
    leftBoxType="blue-box"
    leftParagraph={
        <Paragraph2
            title="Components and Containment Pattern"
            body="Composition is better than inheritance.
            React has decent support for composition."
        />
    }
    rightBoxType="green-box"
    rightParagraph={
        <div>
            <button>Random Button</button>
            <Paragraph2
                title="Muwahaha More Reading"
                body="Idk. I don't like writing so much.
                I don't know what to write."
            />
        </div>
    }
/>,
next());
