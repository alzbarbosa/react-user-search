import UserCard from "../user-card/user-card.component"

const UserList = ({users}) => {

    return (
        <>
        {users.map((user, index)=> {
        const {firstName, lastName, company, skill, grades, pic, email, id, tag} = user
        return (
        <UserCard
                    key={index}
                    id={id} 
                    firstName={firstName}
                    lastName={lastName}
                    company={company}
                    skill={skill}
                    grades={grades}
                    image={`${pic}`}
                    email={email}
                    tag={tag}
        />)
    })}

        </>
    )
}

export default UserList
