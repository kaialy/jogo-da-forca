import styled from "styled-components"

export default function Jogo(props) {
    
    return (
        <ContainerForca>
            <img src={props.imagens[props.erros]} alt="imagem da forca" />
            <button onClick={props.iniciarJogo}>Escolher palavra</button>
            <PalavraJogo cor={props.corPalavra}>{props.palavraDoJogo}</PalavraJogo>
        </ContainerForca>
    )
}

const PalavraJogo = styled.h1`
    color: ${(props) => props.cor};
    font-size: 40px;
    margin-right: 5px;
    font-family: "Segoe UI";
`

const ContainerForca = styled.div`
    display: flex;
    align-items: flex-end;
    width: 700px;
    margin-bottom: 50px;
    position: relative;
    justify-content: space-between;
    img {
        width: 400px;
    }
    button {
        background-color: #27ae60;
        border-radius: 8px;
        border-style: none;
        box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        padding: 15px 20px;
        text-align: center;
        position: absolute;
        right: 0;
        top: 30px;
        min-width: 150px;
    }
`