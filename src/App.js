import React, { useState } from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import Chute from "./components/Chute"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"
import styled from "styled-components"

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {
    const [desabilitaInput, setDesabilitaInput] = useState(true)    // habilitar e desabilitar o input
    const [erros, setErros] = useState(0)                           // quantidade de erros cometidas pelo usuario
    const [palavraEscolhida, setPalavraEscolhida] = useState([])    // palavra sorteada
    const [palavraDoJogo, setPalavraDoJogo] = useState([])          // palavra que o usuário está adivinhando
    const [letrasUsadas, setLetrasUsadas] = useState(alfabeto)      // as letras que o usuário já tentou
    const [stringSemAcentos, setStringSemAcentos] = useState("")    // palavra escolhida sem acentos e cedilha
    const [chute, setChute] = useState("")                          // estado do input cotrolado
    const [corPalavra, setCorPalavra] = useState("black")           // trocar classname da cor do h1

    function iniciarJogo() {
        setDesabilitaInput(false)
        setLetrasUsadas([])
        sortearPalavra()
        setErros(0)
        setChute("")
        setCorPalavra("black")
    }

    function finalizarJogo(){
        setLetrasUsadas(alfabeto)
        setDesabilitaInput(true)
        setChute("")
        setPalavraDoJogo(palavraEscolhida)
    }

    function sortearPalavra() {
        const i = Math.floor(Math.random() * palavras.length)
        const palavra = palavras[i]
        const arrayPalavra = palavra.split("")
        setPalavraEscolhida(arrayPalavra)

        let tracinhos = []
        arrayPalavra.forEach((letra) => tracinhos.push(" _"))
        setPalavraDoJogo(tracinhos)

        const novaPalavra = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        setStringSemAcentos(novaPalavra)
    }

    function clicouLetra(l) {
        setLetrasUsadas([...letrasUsadas, l])
        if(stringSemAcentos.includes(l)){
            acertouLetra(l)
        } else {
            errouLetra(l)
        }
    }

    function acertouLetra(l){
        const novaPalavraJogo = [...palavraDoJogo]
        palavraEscolhida.forEach((letra, i) => {
            if(stringSemAcentos[i] === l){
                novaPalavraJogo[i] = letra
            }
        })
        setPalavraDoJogo(novaPalavraJogo)

        // verificar se ganhou
        if(!novaPalavraJogo.includes(" _")){
            setCorPalavra("green")
            finalizarJogo()
        }
    }

    function errouLetra(l){
        const novaQuantidadeErros = erros + 1
        setErros(novaQuantidadeErros)

        // verificar se perdeu
        if(novaQuantidadeErros === 6){
            setCorPalavra("red")
            finalizarJogo()
        }

    }

    function chutarPalavraInteira(){
        let escolhidaString = palavraEscolhida.join("")
        if(chute === escolhidaString){
            setCorPalavra("green")
        } else {
            setCorPalavra("red")
            setErros(6)
        }
        finalizarJogo()
    }

    return (
        <ContainerTela>
            <Jogo 
                imagens={imagens} 
                erros={erros} 
                iniciarJogo={iniciarJogo} 
                corPalavra={corPalavra} 
                palavraDoJogo={palavraDoJogo}
            />
            <Letras 
                alfabeto={alfabeto}
                letrasUsadas={letrasUsadas}
                clicouLetra={clicouLetra}
            />
            <Chute 
                desabilitaInput={desabilitaInput}
                chute={chute}
                setChute={setChute}
                chutarPalavraInteira={chutarPalavraInteira}
            />
        </ContainerTela>
    )
}

const ContainerTela = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`