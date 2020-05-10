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
            id: Date.now(),
            name: "ClydeFrog04",
            email: "randy@randalegan.com",
            role: "Coder? Problem Solver? I type things until they work and somehow nobody seems to notice."
        }]
    );
    const [memberToEdit, setMemberToEdit] = useState({});

    const handleSubmit = (member) => {
        console.log("Member in handlSubmit app.js: ", member);
        if(memberToEdit.id) {
            editMember(member);//member is the edited member data, so it needs to be passed to edit. memberToEdit contains the previous data of the member we want to edit, so if we edit based on that, we aren't changing the data at all
        }else {
            setMembers([...members, member]);
        }
    }

    const editMember = (member) => {//pass in the member id and use that to get the member from the state array
        const tempMembers = members;
        tempMembers[memberToEdit.id] = member;
        console.log("Membertoedit: ", member);
        console.log("Edited member: ", tempMembers[memberToEdit.id]);
        setMembers(tempMembers);
        setMemberToEdit({});//clear the member to edit so we can go back to the standard form. Without this we are perpetually editing whatever member is clicked!
    }

    const memberCards = members.map(member => {
        return (
            <MemberCard key={member.id} member={member} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit}/>
        );
    });

    return (
        <div className="App">
            <Form onSubmit={handleSubmit} memberToEdit={memberToEdit}/>
            <MemberContainer className="memberContainer">
                {memberCards}
            </MemberContainer>
        </div>
    );
}

export default App;
