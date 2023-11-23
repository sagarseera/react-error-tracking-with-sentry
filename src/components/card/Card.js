import "./Card.css";
const Card = ({ user }) => {
    const { name, gender, designation, buttonLabel } = user;
    const userAvatar = gender === "M" ? "/man.png" : "/woman.png";

    const handleButtonClick = (user) => {
        const { id, age } = user;
        if (age > 35) {
            throw new RangeError("The argument must be between -500 and 500.");
        } else if (id === 2) {
            console.log(user.address);
        } else if (id === 4) {
            console.log(age.toFixed());
        } else {
            throw new ReferenceError("Hello");
        }
    };

    return (
        <div className='card'>
            <img src={userAvatar} alt='Avatar' />
            <div className='container'>
                <h4>
                    <b>{name}</b>
                </h4>
                <p>{designation}</p>
                <button
                    onClick={() => handleButtonClick(user)}
                    className='button'
                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
};

export default Card;
