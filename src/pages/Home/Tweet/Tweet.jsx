import './Tweet.css';

const Tweet = ({ style, key, tweet, onClick }) => (
    <div className="post-container" style={style}>
        <div className='post-header' key={key}>
            <h4 onClick={onClick}>
                {tweet.nome}
                <p>
                    @{tweet.nome_usuario}
                </p>
            </h4>
            {tweet.criado && <h6>{tweet.criado}</h6>}
            {tweet.atualizado && <h6>{tweet.atualizado} (alterado)</h6>}
        </div>
        <p>
            {tweet.conteudo}
        </p>
    </div>
)

export default Tweet;
