const PostCard = ({ Titulo, Foto, URL, Post }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s4 m4 xl4">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={`${URL}${Foto[0].url}`} />
                            <span className="card-title"></span>
                        </div>
                        <div className="card-content">
                            <p>{Titulo}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
