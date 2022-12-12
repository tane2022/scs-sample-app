import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";
import GenericTemplate from '../templates/GenericTemplate';

import { Typography, TextField, Button, CssBaseline, Container } from '@material-ui/core';


type Props = {} & RouteComponentProps<{}>;

const RemoteCheckStart: React.FC<Props> = (props) => {

  return (
    <GenericTemplate title={'遠隔巡視予定'}>
      <MaterialTable
        columns={[
          { title: '巡視方法', field: 'check'},
          { title: '巡視予定日', field: 'itemName'},
          { title: '巡視時刻', field: 'category' },
        ]}
        data={[
          { check: '遠隔', itemName: '2022/12/12', category: '13:00' },
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

<MaterialTable
        columns={[
          { title: '現場側対応者', field: 'itemName'},
          { title: '所属会社', field: 'category' },
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

        <p></p>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
        >
          遠隔巡視開始
        </Button>

    </GenericTemplate>
  );
};

export default withRouter(RemoteCheckStart);