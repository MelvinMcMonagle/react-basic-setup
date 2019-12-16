import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import DeveloperDetails from './DeveloperDetails'
import axios from 'axios'

export default class Developer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedDeveloper: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getDeveloperData();
  }

  //Function to get the Developer Data from json
  getDeveloperData() {
    axios.get('assets/samplejson/developerlist.json').then(response => {
      this.setState({developerlist: response})
    })
  };

  render() {
    if (!this.state.developerlist)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.developerlist.data.map(developer => <Panel bsStyle="info" key={developer.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{developer.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{developer.email}</p>
              <p>{developer.phone}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedDeveloper: developer.id})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <DeveloperDetails val={this.state.selectedDeveloper}/>
      </div>
    </div>)
  }

}
