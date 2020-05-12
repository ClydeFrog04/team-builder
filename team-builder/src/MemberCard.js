import React from "react";
import styled from "styled-components";

const bgColor = "#C8C6AF";
const Member = styled.div`
        border: 1px solid black;
        border-radius: 20px 0 20px 0;
        margin: 4% 2%;
        width: 400px;
        padding: 1%;
        background-color: ${bgColor};
    `;



export default function MemberCard(props) {
    const {member} = props;

    return(
        <Member className="memberCard">
            <h2>{member.name}</h2>
            <h4>{member.email}</h4>
            <h4>{member.role}</h4>
            <button onClick={() => props.setMemberToEdit(member)}>Edit</button>
        </Member>
    )

}