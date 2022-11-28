

export default function Letras(props) {
    const {alfabeto, letrasUsadas, clicouLetra} = props

    return (
        <div className="container-letras">
            {alfabeto.map((letra) => (
                <button
                    key={letra}
                    onClick={() => clicouLetra(letra)}
                    disabled={letrasUsadas.includes(letra)}
                >
                    {letra}
                </button>
            ))}
        </div>
    )
}