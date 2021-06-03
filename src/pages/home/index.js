import React from 'react';
import { UserList,UserForm } from "../../component";

export class Home extends React.Component {



    render() {
    //   console.log(this.props.history.push(''))
        return (
            <div className="container mt-5">

                <div className="row">
                    <div className="col-6">
                        <UserForm />
                    </div>
                    <div className="col-6">
                        <UserList history={this.props.history}/>
                    </div>

                </div>


              
            </div>

        )



    }


}


