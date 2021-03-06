
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


export default class CardLarge extends React.Component {

  static getIcon() { return "view_stream" }

  time(T) {
    var d = new Date(0)
    d.setUTCSeconds(T/1000.0)
    return d.toLocaleDateString()
  }

  render() {
    var users = this.props.summaries.map(U => {
      U.modificationTime = this.time(U.modificationTime)
      U.creationTime = this.time(U.creationTime)
      return U
    })
    users = users.toArray()
    return (
      <div style={{ overflow: 'scroll', height: '95%', width: '100%' }}>
        {users.map(U => (
          <Card style={{ margin: "20"}}>
            <CardHeader
              title={"Created on " + U.creationTime}
              subtitle={"Modified on " + U.modificationTime}
            />
            <CardTitle title={
              <a href={"http://www.ndexbio.org/#/user/" + U.externalId}>{U.accountName}</a>
            } subtitle={U.emailAddress}/>
            <CardText>
              {U.description}
            </CardText>
          </Card>
          )
        )}
      </div>
    )
  }
}
