import React , { Component }from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Subheader from 'material-ui/lib/Subheader/Subheader';
const style={
    marginBottom: '0',
    marginRight: '24px',
    width: '360px',
    borderRight: '2px solid black',
    order: 1,
    height: '93%'
}
export default class AppLeftPannel extends Component{

    render() {
        return (
            <List style={style}> 
                <ListItem primaryText="新闻管理" />
                <ListItem primaryText="药品管理" initiallyOpen={true} primaryTogglesNestedList={true}
                    nestedItems={[
                            <ListItem key={1} primaryText="药品添加" style={{backgroundColor: 'rgba(0,0,0,0.09)'}}/>,
                            <ListItem key={2} primaryText="药品信息" />,
                            <ListItem key={3} primaryText="批量添加" />,
                            <ListItem key={4} primaryText="认证到期" />,
                        ]}
                    />
                <ListItem primaryText="商户管理"  initiallyOpen={false} primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem key={1} primaryText="商户添加" />,
                        <ListItem key={2} primaryText="商户信息" />,
                    ]}
                />
                <ListItem primaryText="药店LBS"  initiallyOpen={false} primaryTogglesNestedList={true}
                    nestedItems={[
                            <ListItem key={1} primaryText="药店添加" />,
                            <ListItem key={2} primaryText="药店信息" />,
                            <ListItem key={3} primaryText="批量导入" />,
                            <ListItem key={4} primaryText="合同到期" />,
                        ]}
                />
                <ListItem primaryText="系统设置"/>
            </List>
    );
}

}