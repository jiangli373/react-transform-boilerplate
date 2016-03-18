import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
var  Colors = require('material-ui/lib/styles/colors');

const style={
	width:500,
	float:'left'
}
const radioButtonStyle = {
 	marginBottom: 0,
    width:100,
    display: 'inline-block',
    float:'left'
};
const labelStyle={
	width:150,
	display: 'inline-block',
	textAlign:'center',
	paddingLeft: 15,
    paddingRight: 15
}
const datepickerStyle={
	width:320,
	display: 'inline-block'
}
const buttonStyle={
	width:200,
	display: 'inline-block',
	textAlign:'center'
}
const bottomButton = {
	display: 'inline-block',
	textAlign:'center',
	margin:10
};
const bottomButtonWrap = {
	margin:'auto',
	textAlign:'center',
	marginTop:30
}
const iconStyles = {
  marginRight: 24,
};
const errorStyle = {
	position:'absolute',
	bottom: '-10px'
}
export default  class  AppContentMiddle extends Component{

	constructor(props) {
    super(props);
    this.state = {
    	isIdentification: 1,
    	name:'',
    	guoyaozhunzi:'',
    	tiaoma:'',
    	description:'',
    	volume:0,
    	format:'',
    	jixing:'',
    	company:'',
    	address:'',
    	website:'',
    	identificationStartTime:null,
    	identificationEndTime:null,
    	enname:'',
    	ischu:1,
    	chengfen:'',
    	yongfa:'',
    	jinji:'',
    	zhunyizhu:'',
    	validateTime:null,
    	isWatermark:'是',
    	img:''
    };
  }

  handleChange(attributeType,event,value) {
  
  // console.log('===attributeType========',attributeType);
  // console.log('===event========',event);
  // console.log('===value========',value);
		let changValue = event&&event.target.value||value;
		let currentState = this.state;
		currentState[attributeType] = changValue
		this.setState(currentState);
  }
  resetForm(){
  	this.setState({
    	isIdentification: 1,
    	name:'',
    	guoyaozhunzi:'',
    	tiaoma:'',
    	description:'',
    	volume:0,
    	format:'',
    	jixing:'',
    	company:'',
    	address:'',
    	website:'',
    	identificationStartTime:null,
    	identificationEndTime:null,
    	enname:'',
    	ischu:1,
    	chengfen:'',
    	yongfa:'',
    	jinji:'',
    	zhunyizhu:'',
    	validateTime:null,
    	isWatermark:'是',
    	img:''
    });
  }

	render(){
		let nameErrorText = null;
		if(this.state.name==''||this.state.name==null){
			nameErrorText = '请填写药品名称'
		}
		let guoyaozhunziErrorText = null;
		if(this.state.guoyaozhunzi==''||this.state.guoyaozhunzi==null){
			guoyaozhunziErrorText = '请填写国药准字'
		}
		return (
			<div>
				<div style={style}>
				<label style={labelStyle}>药品名称<span style={{color:Colors.red500}}>*</span></label>
				    <TextField hintText="药品名称" errorText={nameErrorText} errorStyle={errorStyle} value={this.state.name} onChange={this.handleChange.bind(this,'name')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>国药准字<span style={{color:Colors.red500}}>*</span></label>
				    <TextField hintText="国药准字" errorText={guoyaozhunziErrorText} value={this.state.guoyaozhunzi} errorStyle={errorStyle} onChange={this.handleChange.bind(this,'guoyaozhunzi')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>药品条码</label>
				    <TextField hintText="药品条码" value={this.state.tiaoma} onChange={this.handleChange.bind(this,'tiaoma')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>描述</label>
				    <TextField hintText="描述" value={this.state.description} onChange={this.handleChange.bind(this,'description')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>容量</label>
				    <TextField hintText="容量" value={this.state.volume} onChange={this.handleChange.bind(this,'volume')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>规格</label>
				    <TextField hintText="规格" value={this.state.format} onChange={this.handleChange.bind(this,'format')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>剂型</label>
				    <TextField hintText="剂型" value={this.state.jixing} onChange={this.handleChange.bind(this,'jixing')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>生产公司</label>
				    <TextField hintText="生产公司" value={this.state.company} onChange={this.handleChange.bind(this,'company')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>公司地址</label>
				    <TextField hintText="公司地址" value={this.state.address} onChange={this.handleChange.bind(this,'address')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>药企网站</label>
				    <TextField hintText="药企网站" value={this.state.website} onChange={this.handleChange.bind(this,'website')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>是否认证</label>
				    <SelectField value={this.state.isIdentification} onChange={this.handleChange.bind(this,'isIdentification')}>
          				<MenuItem value={0} primaryText="否"/>
          				<MenuItem value={1} primaryText="是"/>
                    </SelectField>
				</div>
				<div style={style}>
				<label style={labelStyle}>认证时间(起)</label>
				    <DatePicker hintText="认证时间(起)" container="inline" style={datepickerStyle} value={this.state.identificationStartTime} onChange={this.handleChange.bind(this,'identificationStartTime')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>认证时间(止)</label>
				    <DatePicker hintText="认证时间(止)" container="inline" style={datepickerStyle} value={this.state.identificationEndTime} onChange={this.handleChange.bind(this,'identificationEndTime')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>药品英文名称</label>
				    <TextField hintText="药品英文名称" onChange={this.handleChange.bind(this,'enname')}/>
				</div>
				<div style={style}>
				    <label style={labelStyle}>非处方药/处方药</label>
				    <SelectField value={this.state.ischu} onChange={this.handleChange.bind(this,'ischu')}>
				    	<MenuItem value={0} primaryText="否"/>
          				<MenuItem value={1} primaryText="是"/>
                    </SelectField>
				</div>
				<div style={style}>
				<label style={labelStyle}>主要成分</label>
				    <TextField hintText="主要成分" value={this.state.chengfen} onChange={this.handleChange.bind(this,'chengfen')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>用法用量</label>
				    <TextField hintText="用法用量" value={this.state.yongfa} onChange={this.handleChange.bind(this,'yongfa')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>禁忌和慎用</label>
				    <TextField hintText="禁忌和慎用" value={this.state.jinji} onChange={this.handleChange.bind(this,'jinji')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>或遵医嘱</label>
				    <TextField hintText="或遵医嘱" value={this.state.zhunyizhu} onChange={this.handleChange.bind(this,'zhunyizhu')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>有效期</label>
				    <DatePicker hintText="有效期" container="dialog" style={datepickerStyle} value={this.state.validateTime} onChange={this.handleChange.bind(this,'validateTime')}/>
				</div>
				<div style={style}>
				<label style={labelStyle}>添加水印</label>
				    <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.isWatermark} style={datepickerStyle} onChange={this.handleChange.bind(this,'isWatermark')}>
					      <RadioButton value="是" label="是" style={radioButtonStyle} />
					      <RadioButton value="否" label="否" style={radioButtonStyle} />
    				</RadioButtonGroup>
				</div>
				<div style={style}>
					<RaisedButton label="上传图片" secondary={true} style={buttonStyle} ></RaisedButton>
				</div>
				<div style={{clear:'both'}}></div>
				<div style={bottomButtonWrap}>
					<div style={bottomButton}>
						<RaisedButton label="保存" secondary={true} style={buttonStyle} ></RaisedButton>
					</div>
						<div style={bottomButton}>
						<RaisedButton label="重置" primary={true} style={buttonStyle} onMouseDown={this.resetForm.bind(this)}></RaisedButton>
					</div>
				</div>
			</div>
			);
	}
}