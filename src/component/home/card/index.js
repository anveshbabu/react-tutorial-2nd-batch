import React from 'react';

// let count
export class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'azxy',
            interCounr: 0
        }

    }


    componentDidMount() {
        // count=  setInterval(()=>{ this.setState({interCounr:this.state.interCounr+1});console.log(this.state.interCounr) }, 1000);
    }

    // con

    handleSendProps = () => {
        console.log(this.state.name)
        this.props.getDate(this.state.name)
    }

    componentDidUpdate(prevProps) {
        if (this.props.count !== prevProps.count) {
            // this.fetchData(this.props.userID);
            // console.log('chnge')
        }
    }




    componentWillUnmount() {

        console.log('componentWillUnmount')
        // clearInterval(this.count);




    }
    render() {
        console.log('render--->')
        return (
            <>
                <h4> setInterval count: {this.state.interCounr}</h4>

                {/* <button onClick={this.handleSendProps}> send parent com data</button>
                <h4>Cards:{this.props.count}</h4> */}
            </>
        )



    }


}