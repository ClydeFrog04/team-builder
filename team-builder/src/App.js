import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import MemberCard from "./MemberCard";
import styled from "styled-components";

const MemberContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function App() {
    const [members, setMembers] = useState([{
            id: 1,
            name: "ClydeFrog04",
            email: "randy@randalegan.com",
            role: "Coder? Problem Solver? I type things until they work and somehow nobody seems to notice."
        }]
    );

    const handleSubmit = (member) => {
        setMembers([...members, member]);
        console.log(members);
    }

    const memberCards = members.map(member => {
        return (
            <MemberCard key={member.name} member={member}/>
        );
    });

    return (
        <div className="App">
            <Form onSubmit={handleSubmit}/>
            <MemberContainer className="memberContainer">
                {memberCards}
            </MemberContainer>
        </div>
    );
}

export default App;
