import React from 'react';
import { Link } from "react-router-dom";


export class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userList: [
                {
                    name: 'Anvesh',
                    email: 'anv@gmail.com',
                    Pno: '1234687252',
                    status: 'active'
                },
                {
                    name: 'Tony',
                    email: 'tony@gmail.com',
                    Pno: '1234687252',
                    status: 'active'
                },
                {
                    name: 'HUlk',
                    email: 'hulk@gmail.com',
                    Pno: '1234687252',
                    status: 'de-active'
                }
            ]
        }

    }

    handleRoute = (name) => {
        console.log(name)
        this.props.history.push('/user/' + name)
    }

    render() {
        console.log('User List props------------', this.props)
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-12">
                        <h4>User List</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12"></div>
                    {/* {this.state.userList.map((data, i) =>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{data.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    )} */}
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">P.Number</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.userList.map((data, i) =>
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td onClick={() => this.handleRoute(data.name)}>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.Pno}</td>
                                    <td className={data.status === 'de-active' ? 'text-danger' : 'text-primary'}>{data.status} </td>

                                    {
                                        data.status === 'de-active' ? <td><button className="btn">Delete</button></td> : ''
                                    }


                                </tr>

                            )}

                        </tbody>
                    </table>
                </div>
            </div>
            // </div>

        )



    }


}


