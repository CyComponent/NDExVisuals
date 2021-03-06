
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import React from 'react'

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'

import RaisedButton from 'material-ui/RaisedButton'

export default class LinkCardLarge extends React.Component {

  static getIcon() { return "view_stream" }

  render() {
    const cardStackStyle = {
      height: '95%'
    }
    var networks = this.props.summaries.toArray()
    return (
     <div style = {cardStackStyle}>
       <div style={{ overflow: 'scroll', height: '95%' }}>
         {networks.map(N => (
            <Card style={{ margin: "20"}}>
              <CardHeader
                title={"Created on " + N.creationTime}
                subtitle={"Modified on " + N.modificationTime}
              />
              <CardMedia>
                <NetworkImage N={N}/>
              </CardMedia>
              <CardTitle
              title={
                <a href={"http://www.ndexbio.org/#/newNetwork/" + N.externalId}>{N.name}</a>
              }
               subtitle={N.owner}/>
              <CardText>{N.description}</CardText>
            </Card>
            )
          )}
        </div>
      </div>
    )
  }
}

class NetworkImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  error = () => {
    console.log("Called error")
    this.setState({ error: true })
  }

  render() {
    var style = {}
    if (this.state.error) {
      style = { display: 'none' }
    }
    return (
      <img
        src={"http://ci-dev-serv.ucsd.edu/" + this.props.N.externalId + ".png"}
        onError={this.error}
        style={Object.assign({ width: '50%', minWidth: 0, display: 'block', margin: 'auto' }, style)}
      />
    )

  }

}
