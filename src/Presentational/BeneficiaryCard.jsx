import React, { Component } from 'react';
import "../index.css";

import Card, { CardActions, CardContent } from 'material-ui/Card';
import {GridListTile} from 'material-ui/GridList';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const Tag = ({tags}) => (
  <div>
    {tags.map(tag => (
      <div>{tag}</div>
    ))}
  </div>
);

export default class BeneficiaryCard extends Component {
  render() {
    return <Card>
        <CardContent>
          <Typography type="body1">
            {this.props.beneficiary.nombre}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => this.props.openProfileDetails(this.props.beneficiary.id)}>DETALLES</Button>
        </CardActions>
      </Card>
      /*<div className="needCard"> 
        <label className="needCard title">{this.props.name}</label>
        <label className="needCard content">¿Dónde?</label>
        <label className="needCard content">
          <a href="{this.props.mapsurl}">{this.props.address}</a>
        </label>
        <label className="needCard content">¿Qué necesita?</label>

        <Tag tags={["Alimentos", "Medicamentos", "Voluntarios"]} />

        <button className="needCard btn">Detalles</button>
      </div>*/
  }
}
