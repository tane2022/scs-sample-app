import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";
import GenericTemplate from '../templates/GenericTemplate';

import { Typography, TextField, Button, CssBaseline, Container } from '@material-ui/core';

import SampleImage from "../images/weather_1week.png"


type Props = {} & RouteComponentProps<{}>;

const ConstInfo: React.FC<Props> = (props) => {

  return (
    <GenericTemplate title={'入場者一覧'}>
      <MaterialTable
        columns={[
          { title: '物件No', field: 'itemName'},
          { title: '物件名', field: 'category' },
        ]}
        data={[
          { itemName: '1234567890', category: '本間章朗様邸　新築工事'},
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
        }}
      />
    <p></p>
    <MaterialTable
        columns={[
          { title: '入場時刻', field: 'inDatetime'},
          { title: '所属企業', field: 'kigyo' },
          { title: '氏名', field: 'name'},
          { title: '立場', field: 'tachiba' },
          { title: '開始報告', field: 'kaishi' },
        ]}
        data={[
          { inDatetime: '2022/8/1 05:45', kigyo: '日本電気株式会社', name: '日本　太郎', tachiba: '職長', kaishi: '有'},
          { inDatetime: '2022/8/1 06:30', kigyo: '日本電気株式会社', name: '本間　太郎', tachiba: '安全衛生責任者', kaishi: '有'},
          { inDatetime: '2022/8/1 06:48', kigyo: '日本電気株式会社', name: '種村　次郎', tachiba: '担当', kaishi: '有'},
          { inDatetime: '2022/8/1 08:30', kigyo: '日本電気株式会社', name: '本間　次郎', tachiba: '担当', kaishi: '有'},
          { inDatetime: '2022/8/1 05:45', kigyo: '内装工務店', name: '内装　一郎', tachiba: '職長', kaishi: '有'},
          { inDatetime: '2022/8/1 05:45', kigyo: '内装工務店', name: '内装　三郎', tachiba: '担当', kaishi: '有'},
          { inDatetime: '2022/8/1 05:45', kigyo: '外構組', name: '外構　久兵衛', tachiba: '職長', kaishi: '無'},
        ]}
        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0,
          backgroundColor: "#1565C0", color: "#FFF" },
          paging: true,
          maxBodyHeight: 300,
          search: true,
          searchFieldVariant: "standard",
          toolbar: true
        }}
      />

    </GenericTemplate>
  );
};

export default withRouter(ConstInfo);