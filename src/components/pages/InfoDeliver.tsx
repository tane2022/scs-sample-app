import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";
import GenericTemplate from '../templates/GenericTemplate';

import { Typography, TextField, Button, CssBaseline, Container } from '@material-ui/core';


type Props = {} & RouteComponentProps<{}>;

const InfoDeliver: React.FC<Props> = (props) => {
  return (
    <GenericTemplate title={'伝達登録'}>
      <MaterialTable
        columns={[
          { title: '現場側対応者', field: 'itemName', headerStyle: { maxWidth: 0}},
          { title: '所属会社', field: 'category', headerStyle: { minWidth: 150}},
        ]}
        data={[
          { itemName: '種村　慎也', category: '日本電気株式会社' },
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0,
          backgroundColor: "#1565C0", color: "#FFF" },
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false
/*          searchFieldAlignment: 'left',
*/
        }}
      />
      <br></br>
      <p>工事中</p>
      <br></br>
    </GenericTemplate>
  );
};

export default withRouter(InfoDeliver);