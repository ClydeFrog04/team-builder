import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import MemberCard from "./MemberCard";

function App() {
    const [members, setMembers] = useState([{
            id: 1,
            name: "ClydeFrog04",
            email: "randy@randalegan.com",
            role: "Coder? Problem Solver? I type things until they work and somehow nobody seems to notice."
        }]
    );

    const handleSubmit = (member) =>{
        setMembers([...members, member]);
        console.log(members);
    }

    const memberCards = members.map(member =>{
        return(
            <MemberCard key={member.name} member={member}/>
        );
    });

    return (
        <div className="App">
            <Form onSubmit={handleSubmit}/>
            {memberCards}
        </div>
    );
}

export default App;
