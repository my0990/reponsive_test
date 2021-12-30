import styled from 'styled-components';


const Container = styled.div`
    width: 50%;
    height: 50%;
    border: 5px solid black;
    border-radius: 5%;
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translate(-50%);
    background-color: gray;
    padding-top: 5%;
    box-sizing: border-box;
    .h1 {
        font-size: 2.5vw;
        text-align: center;
    }
    .input {
        width: 10%;
        height: 5px;
    }
    @media screen and (min-width: 768px){
        width: 800px;
        height: 500px;
        bottom: 250px;
    }


`

function InputModal(){
    return (
        <Container>
            <h1 className='h1'>마지막 번호가 몇 번인가요?</h1>
            <div style={{textAlign:'center'}}>
                {/* <input className='input'/>
                <label>번</label> */}
            </div>
        </ Container>
    )
}

export default InputModal;