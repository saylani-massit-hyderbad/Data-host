import { FcHome } from "react-icons/fc";

import { RiHome5Fill } from "react-icons/ri";




function App(){

  
  return(
    <>
   <div>
   {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
   <FcHome size='16'/></div> 
  
    <RiHome5Fill color='blue'/>
    <Button variant="contained" color="secondary">
        Secondary
      </Button>
    <h1>hello</h1>
    </>
  )
}

export default App;