
const Cards = ({icon, title, paragraph}) => {
  return (
        <div className="col-4 justify animate">
            <div className="landing__card">
                <div className="landing__card__icons">
                    <img src={icon} alt={icon} />
                </div>
                <h1 className="landing__card__title">
                    {title}
                </h1>
                <p className="landing__card__paragraph">
                    {paragraph}
                </p>
            </div>
        </div>
  )
}

export default Cards