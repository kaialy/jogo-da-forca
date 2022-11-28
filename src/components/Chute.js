export default function Chute({desabilitaInput, chute, setChute, chutarPalavraInteira}) {
    return (
        <div className="container-input">
            <span>Já sei a palavra!</span>
            <input disabled={desabilitaInput} value={chute} onChange={(e) => setChute(e.target.value)} />
            <button onClick={chutarPalavraInteira}>Chutar</button>
        </div>
    )
}