export default function Disclaimer({sourceType, sourceName, sourceAuthor, sourceUrl}) {
    
    return(
        <>
            <hr />
            <blockquote>
                como técnica de aprendizado, eu produzo conteúdo público com base nas minhas anotações, pesquisas e entendimentos. o objetivo deste texto não é funcionar como um curso ou tutorial, mas como um compilado de <strong>notas de estudos</strong>. a base para as notas desta página é o {sourceType} {sourceUrl ? <a href={`${sourceUrl}`} target="_blank">{sourceName}</a> : `${sourceName}`}, por {sourceAuthor}.
            </blockquote>        
        </>
    )
}