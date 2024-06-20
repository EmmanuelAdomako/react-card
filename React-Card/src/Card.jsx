import profilePic from './assets/cvpic.png'

function Card(){

    return(
        <div className="card">
            <img src={profilePic} alt="Profile Pic" />
            <h2>Emmanuel Adomako</h2>
            <p>I am a <span>Software Developer</span> and I build Software Solutions for Fintechs</p>

        </div>

    );


}

export default Card 