import React from 'react';
import { UserList } from "../../component/user/userList";
export class UserDatails extends React.Component {




    render() {
        console.log('this.props---------->',this.props.match.params.id)
        return (
<>
          <h4 className="mt-5"> User Detals by {this.props.match.params.id}</h4>
          <UserList a={20}/ >
          </>
        )



    }


}