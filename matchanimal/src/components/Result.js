export default function({result}){
    return(
        <div>
            {result === 'win' && <h2> Congratulations! You win </h2>}
            {result === 'lose' && <h2> You lose! try again. </h2>}
        </div>
    )
}