import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";
import GenericTemplate from '../templates/GenericTemplate';

import { Typography, TextField, Button, CssBaseline, Container } from '@material-ui/core';

import SampleImage from "../images/cont_in.png"


type Props = {} & RouteComponentProps<{}>;

const RemoteCheckVideo: React.FC<Props> = (props) => {

  const move = () => {
    props.history.push({
      pathname: '/constInfo',
      state: { sourcePage: 'HomePage' }
    });
  };

  return (
    <GenericTemplate title={'遠隔巡視'}>
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
    <img src={SampleImage} alt="sample" />    
    <br></br>
        <p></p>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={move}
        >
          巡視終了
        </Button>

    </GenericTemplate>
  );
};

export default withRouter(RemoteCheckVideo);