import React from 'react';
// import { Cards } from "../../component";


export class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            addr: '',
            userFormObj:{
                name:'',
                age:'',
                dob:'',
                country:'',
                state:''
            }
        }

    }



    handleFormChange = (event) => {

        const target = event.target
        const name = target.name
        const value = target.value;



        this.setState({userFormObj:{
            ...this.state.userFormObj,
        [name]:value}})
     
    
    }



    handleSubmitForm = () => {
        console.log('handleSubmitForm---', this.state.userFormObj,)
    }


    render() {
        let a = 10
        // console.log('render --->',10);
        // this.setState({count:100})
        return (
            <div>
                 <div className="row">
                    <div className="col-12">
                        <h4>User Form</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label className="mb-1">Name</label>
                            <input className="form-control" type="text" value={this.state.userFormObj.name} name='name' onChange={this.handleFormChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label className="mb-1">Age</label>
                            <input className="form-control" type="text" value={this.state.userFormObj.age} name='age' onChange={this.handleFormChange} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label className="mb-1">DOB</label>
                            <input className="form-control" type="text" value={this.state.userFormObj.dob} name='dob' onChange={this.handleFormChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label className="mb-1">DOB</label>
                            <input className="form-control" type="text" value={this.state.userFormObj.state} name='state' onChange={this.handleFormChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label className="mb-1">country</label>
                            <input className="form-control" type="text" value={this.state.userFormObj.country} name='country' onChange={this.handleFormChange} />
                        </div>
                    </div>
                </div>



                <div className="row mt-4">
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={this.handleSubmitForm}>Submit</button>
                    </div>
                </div>


            </div>

        )



    }


}