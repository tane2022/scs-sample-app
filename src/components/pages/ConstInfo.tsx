import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";
import GenericTemplate from '../templates/GenericTemplate';

import { Typography, TextField, Button, CssBaseline, Container } from '@material-ui/core';

import SampleImage from "../images/weather_1week.png"

import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

type Props = {} & RouteComponentProps<{}>;

const ConstInfo: React.FC<Props> = (props) => {

  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  const jsx = `
  <Grid container spacing={${spacing}}>
  `;

  const move = () => {
    props.history.push({
      pathname: '/remoteCheckStart',
      state: { sourcePage: 'HomePage' }
    });
  };

  return (
    <GenericTemplate title={'現場情報'}>
      <MaterialTable
        columns={[
          { title: '物件No', field: 'itemName', headerStyle: { maxWidth: 0}},
          { title: '物件名', field: 'category', headerStyle: { minWidth: 190} },
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
      <MaterialTable
        columns={[
          { title: '着工日', field: 'tyakko', headerStyle: { maxWidth: 0, backgroundColor: "#1565C0", color: "#FFF" }},
          { title: '竣工日', field: 'syunko', headerStyle: { maxWidth: 0} },
          { title: '建築確認検査日', field: 'kentikuCheckDate', headerStyle: { maxWidth: 120}},
          { title: '施主検査日', field: 'sesyuCheckDate', headerStyle: { maxWidth: 10} },
        ]}
        data={[
          { tyakko: '2022/8/1', syunko: '2022/12/24', kentikuCheckDate: '2022/10/14', sesyuCheckDate: '2022/12/1'},
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
      {/*
      <RadioGroup defaultValue="male" row>
      本日の巡視予定：
        <FormControlLabel value="female" control={<Radio />} label="現地" />
        <FormControlLabel value="male" control={<Radio />} label="遠隔" />
        <FormControlLabel value="none" control={<Radio />} label="未設定" />
      </RadioGroup>
      */}
      <MaterialTable
        columns={[
          { title: '本日の巡視予定', field: 'checkName', headerStyle: { minWidth: 300}},
          { title: '巡視詳細', field: 'checkDetail', headerStyle: { minWidth: 200}},
        ]}
        data={[
          { checkName: '本日の巡視予定', checkDetail: '"遠隔"'},
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', 
          backgroundColor: "#1565C0", color: "#FFF", maxHeight: 0 },
          paging: false,
          search: false,
          toolbar: false,
          header: false
        }}
      />
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      onClick={move}
    >
    遠隔巡視開始
    </Button>

    <p></p>
    現地の週間天気
    <br></br>
    <img src={SampleImage} alt="sample" />    
    <br></br>
    ⇒ <a href="https://weather.nifty.com/cs/catalog/weather_pinpoint/catalog_13103_1.htm">東京都港区の天気</a>

    <p></p>
    本日の入退状況
    <MaterialTable
        columns={[
          { title: '氏名', field: 'name', headerStyle: { maxWidth: 0}},
          { title: '入場時刻', field: 'inDatetime', headerStyle: { maxWidth: 0}},
          { title: '入場時刻', field: 'outDatetime', headerStyle: { maxWidth: 0}},
        ]}
        data={[
          { name: '日本　太郎', inDatetime: '2022/8/1 05:45', outDatetime: '2022/8/1 13:18'},
          { name: '本間　太郎', inDatetime: '2022/8/1 07:10', outDatetime: ''},
          { name: '種村　次郎', inDatetime: '2022/8/1 06:22', outDatetime: '2022/8/1 17:32'},
          { name: '内装　一郎', inDatetime: '2022/8/1 07:45', outDatetime: '2022/8/1 16:11'},
          { name: '内装　三郎', inDatetime: '2022/8/1 06:53', outDatetime: '2022/8/1 16:32'},
          { name: '外構　久兵衛', inDatetime: '2022/8/1 08:00', outDatetime: '2022/8/1 17:55'},
        ]}
        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,
          backgroundColor: "#1565C0", color: "#FFF" },
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false
        }}
      />
    </GenericTemplate>
  );
};

export default withRouter(ConstInfo);