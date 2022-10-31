import styled from 'styled-components'

const Vehicule = () => {

    const Wraper =styled.div`
    border: solid 5px rgb(0, 255, 72);
    display: block;
    margin: auto;
    color: white;
    font-size: 100px;
    min-height: 85vh;
    min-width: 70vw;
    overflow: hidden;
     
  `
  return (
   <Wraper>
    <h2>Hola Vheicule</h2>
   </Wraper>
  )
}

export default Vehicule