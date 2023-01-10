import React from 'react'
import * as styled from "./Dashboard.styles";


export default function Dashboard() {
  return (
    <styled.Container>
      <h1>Hi, <span>Name</span>! 👋</h1>
      <p>You have <span>0</span> decks due today.</p>

      <p>Looks like you have no decks, want some help getting started?</p>
    </styled.Container>
  )
}