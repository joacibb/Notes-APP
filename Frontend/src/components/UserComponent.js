import React from 'react';
import UserService from "../service/UserService";

class UserComponent extends React.Component{

    constructor(props) {
        super(props)
        this.state={
            users:[]
        }
    }

    componentDidMount() {
        UserService.getNotes().then((response)=>{
            this.setState({users: response.data})
        })
    }

    render(){
        return(
            <div>
                <h1 className = "text-center">Notes</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <td> Title </td>
                        <td> Content </td>
                        <td> Categories </td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.user.map(
                            user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.content}</td>
                                    <td>{user.categories}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent