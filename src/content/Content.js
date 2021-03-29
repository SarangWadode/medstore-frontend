import React from 'react'
import styled from 'styled-components'

function Content() {
  return <Container>
	  <aside>Aside</aside>
    <main>Main</main>
	</Container>
}

export default Content;

const Container = styled.div`
  color: hsl(0, 13%, 6%);
`
