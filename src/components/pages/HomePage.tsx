import React from "react";
import GenericTemplateTop from "../templates/GenericTemplateTop";

import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";


type Props = {} & RouteComponentProps<{}>;

const HomePage: React.FC<Props> = (props) => {

  interface Product {
    itemName: string;
    category: string;
    weight: string;
    price: string;
  }

  return (
    <GenericTemplateTop title={'現場一覧'}>
      <MaterialTable
        columns={[
          { title: '物件No', field: 'itemName', headerStyle: { minWidth: 0}, defaultSort: 'asc' },
          { title: '物件名', field: 'category', headerStyle: { minWidth: 120} },
          { title: '入場/退場者数', field: 'weight', headerStyle: { maxWidth: 110, } },
          { title: '進捗遅延報告', field: 'price', headerStyle: { maxWidth: 110}},
          { title: '巡視方法(予定)', field: 'checkMethod', headerStyle: { maxWidth: 120}},
          { title: '巡視時刻(予定)', field: 'checkDate', headerStyle: { maxWidth: 120}},
        ]}
        data={[
          { itemName: '1234567890', category: '本間章朗様邸　新築工事', weight: '100/32', price: '無', checkMethod: '遠隔', checkDate: '2022/12/12 13:00' },
          { itemName: '2385739799', category: '山本賢司様邸　新築工事', weight: '400/380', price: '無', checkMethod: '未設定', checkDate: '' },
          { itemName: '9237597978', category: '笹田幸恵様邸　新築工事', weight: '500/346', price: '有', checkMethod: '現地', checkDate: '2022/12/13 8:00' },
          { itemName: '2134897851', category: '日野哲様邸　新築工事', weight: '200/200', price: '無', checkMethod: '未設定', checkDate: '' },
          { itemName: '3339845612', category: '渡邊亮磨様邸　新築工事', weight: '250/89', price: '有', checkMethod: '現地', checkDate: '2022/12/14 9:30' },
          { itemName: '2395794596', category: '澤出浩一様邸　新築工事', weight: '250/100', price: '無', checkMethod: '未設定', checkDate: '' },
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', 
          backgroundColor: "#1565C0", color: "#FFF", maxHeight: 0 },
          paging: true,
          maxBodyHeight: 600,
          // header: false
          // fixedColumns: { left: 1}
        }}

        localization={{
          header: { actions: '' },
        }}
        actions={[
          {
            icon: () => <Icon style={{ color: orange[500] }}> home_work</Icon>,
            tooltip: '現場情報',
            onClick: (_, rowData) => {
{/*              alert('Open edit page of ' + (rowData as any).itemName + '.'),
            */}
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