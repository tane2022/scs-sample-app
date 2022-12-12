import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";
import GenericTemplate from '../templates/GenericTemplate';

type Props = {} & RouteComponentProps<{}>;

const ProductPage: React.FC<Props> = (props) => {

  return (
    <GenericTemplate title={'工事中'}>

    </GenericTemplate>
  );
};

export default withRouter(ProductPage);