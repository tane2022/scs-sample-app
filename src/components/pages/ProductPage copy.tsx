import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { pink, teal, orange } from "@material-ui/core/colors";
import GenericTemplate from '../templates/GenericTemplate';

type Props = {} & RouteComponentProps<{}>;

const ProductPage: React.FC<Props> = (props) => {

  return (
    <GenericTemplate title={'現場情報'}>
      <MaterialTable
        columns={[
          { title: '商品名', field: 'itemName', defaultSort: 'asc' },
          { title: 'カテゴリー', field: 'category' },
          { title: '重量(g)', field: 'weight' },
          { title: '価格(円)', field: 'price' },
        ]}
        data={[
          { itemName: 'チョコレート', category: 'お菓子', weight: 100, price: 120 },
          { itemName: 'ケーキ', category: 'お菓子', weight: 400, price: 480 },
          { itemName: 'りんご', category: 'フルーツ', weight: 500, price: 360 },
          { itemName: 'バナナ', category: 'フルーツ', weight: 200, price: 300 },
          { itemName: 'みかん', category: 'フルーツ', weight: 250, price: 180 },
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0},
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false
/*          searchFieldAlignment: 'left',
*/
        }}
        localization={{
          header: { actions: '' },
        }}
        actions={[
          {
            icon: () => <Icon style={{ color: orange[500] }}> home_work</Icon>,
            tooltip: '現場情報',
            onClick: (_, rowData) =>
              alert('Open edit page of ' + (rowData as any).itemName + '.'),
          },
        ]}

      />
    </GenericTemplate>
  );
};

export default withRouter(ProductPage);