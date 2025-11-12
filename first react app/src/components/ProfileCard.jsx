function ProfileCard(props){
     const sum=props.num+1;
     return(
          <div>
               <h2>Name:{props.name}</h2>
               <h2>Member:{props.isMember}</h2>
               <h2>Status:{props.isMember?"Active Member":"Guest"}</h2>
          </div>
     )
}

export default ProfileCard;