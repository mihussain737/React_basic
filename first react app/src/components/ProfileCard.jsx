import PropTypes from 'prop-types';

function ProfileCard({name, age,isMember,hobbies}) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Member: {isMember ? "Active Member" : "Guest"}</h2>
      <h2>Hobbies</h2>
      <ul>
          {
          hobbies.map((hobby,index)=>{
            return <li key={index}>{hobby}</li>  
          })
          }
          </ul>
    </div>
  );
}


export default ProfileCard;
