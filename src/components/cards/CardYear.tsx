const CardTime = ({ from, to }: { from: Date, to: Date}) => {
    const locale = "en-GB"
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
    
    return (
        <div className="card-time">
            From {from.toLocaleDateString(locale, options)} to {to.toLocaleDateString(locale, options)}
        </div>
    )
}

export default CardTime;
