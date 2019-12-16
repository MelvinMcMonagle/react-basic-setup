import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Developer Component
export default class DeveloperDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getDeveloperDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Developer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getDeveloperDetails(this.props.val)
    }
  }

  //Function to Load the developerDetails data from json.
  getDeveloperDetails(id) {
    axios.get('assets/samplejson/developer' + id + '.json').then(response => {
      this.setState({developerDetails: response})
    })
  };

  render() {
    if (!this.state.developerDetails)
      return (<p>Loading Data</p>)
    return (<div className="developerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.developerDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.developerDetails.data.name}</p>
          <p>Email : {this.state.developerDetails.data.email}</p>
          <p>Phone : {this.state.developerDetails.data.phone}</p>
          <p>City : {this.state.developerDetails.data.city}</p>
          <p>State : {this.state.developerDetails.data.state}</p>
          <p>Country : {this.state.developerDetails.data.country}</p>
          <p>Organization : {this.state.developerDetails.data.organization}</p>
          <p>Job Profile : {this.state.developerDetails.data.jobProfile}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
