const CardTime = ({ time }: { time: Date }) => {
    const locale = "en-GB"
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
    
    return (
        <div className="card-time">
            {time.toLocaleDateString(locale, options)}
        </div>
    )
}

export default CardTime;
