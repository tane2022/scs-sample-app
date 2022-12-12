import React from "react";
import GenericTemplateTop from "../templates/GenericTemplateTop";

import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";


type Props = {} & RouteComponentProps<{}>;

const HomePage: React.FC<Props> = (props) => {
  return (
    <GenericTemplateTop title={'現場一覧'}>
      <MaterialTable
        columns={[
          { title: '物件No', field: 'itemName', defaultSort: 'asc' },
          { title: '物件名', field: 'category' },
          { title: '入場/退場者数', field: 'weight' },
          { title: '進捗遅延報告', field: 'price' },
        ]}
        data={[
          { itemName: '1234567890', category: '本間章朗様邸　新築工事', weight: '100/32', price: '有' },
          { itemName: '2385739799', category: '山本賢司様邸　新築工事', weight: '400/380', price: '無'},
          { itemName: '9237597978', category: '笹田幸恵様邸　新築工事', weight: '500/346', price: '有'},
          { itemName: '2134897851', category: '日野哲様邸　新築工事', weight: '200/200', price: '無'},
          { itemName: '3339845612', category: '渡邊亮磨様邸　新築工事', weight: '250/89', price: '無'},
          { itemName: '2395794596', category: '澤出浩一様邸　新築工事', weight: '250/100', price: '無'},

        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0,
          backgroundColor: "#1565C0", color: "#FFF" },
          paging: true,
          maxBodyHeight: 600,
        }}

        localization={{
          header: { actions: '' },
        }}
        actions={[
          {
            icon: () => <Icon style={{ color: orange[500] }}> home_work</Icon>,
            tooltip: '現場情報',
            onClick: (_, rowData) => {
/*              alert('Open edit page of ' + (rowData as any).itemName + '.'),
          */
              props.history.push({
                pathname: '/constInfo',
                state: { sourcePage: 'HomePage' }
              });
            }}
        ]}

      />
    </GenericTemplateTop>
  );
};

export default HomePage;