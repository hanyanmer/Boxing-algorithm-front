import React, { useRef, useState } from "react";
import {ProCard, ProForm, ProFormGroup, ProFormList, ProFormText} from '@ant-design/pro-components'
import { CloseCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Segmented } from "antd";

export function AddModel(){
  const actionRef = useRef<any>()
  const onFinish = async(form)=>{
    console.log('form',form)

  }
  return <ProForm
  onFinish={onFinish}
  layout="vertical"
  labelAlign="left"
  initialValues={{
    address:[{}]
  }}
  wrapperCol={{span:24}}
  labelCol={{span:24}}
  style={{
    height: 'auto',
    // width: '60%',
    backgroundColor: '',
    marginTop: '10px'
  }}

  >
     <ProCard
    //  title="地址"
          // bodyStyle={{paddingTop:0,paddingBottom:0}}
          style={{marginBlockEnd:8}}
          // title={`第${index+1}个箱子`}
          extra={<Button type="primary" onClick={()=>{
            if(!actionRef?.current) return
            const list = actionRef?.current?.getList()
            actionRef?.current?.add({
              name:''
            })
          }}>
            添加箱子
          </Button>}>
          <ProFormList
        actionRef={actionRef}
      label={<div style={{display:'flex',justifyContent:"space-between",width:'100%'}}><div>地址</div><div>test</div></div>}
      name="address"
      tooltip="运送的地址"
      creatorButtonProps={false}
      // creatorButtonProps={{
      //   creatorButtonText:'添加箱子',
      //   icon:false,
      //   type:'default',
      //   // style:{width:'unset'}
      // }}
      wrapperCol={{span:24}}
      min={1}
      max={5}
      // copyIconProps={{false}}
      deleteIconProps={{tooltipText:'删除'}}
      itemRender={({listDom,action},{index})=>{
       return (
        <div style={{
          // display:'inline-flex',
          // marginInline:25
        }}>
          <ProCard
          // bodyStyle={{paddingTop:0,paddingBottom:0}}
          style={{marginBlockEnd:8}}
          title={`第${index+1}个箱子`}
          >
          {listDom}
          {action}
          </ProCard>
        </div>
       )
      }}
      >
        <ProFormText label="箱子名称" allowClear={true}  name="boxName" wrapperCol={{span:12}}/>
        <ProFormText label="宽度" allowClear={true} name="boxwidth" wrapperCol={{span:12}}/>
        <ProFormText label="高度" allowClear={true}  name="boxheight" wrapperCol={{span:12}}/>
        <ProFormText label="深度" allowClear={true}  name="boxlength" wrapperCol={{span:12}}/>

    </ProFormList>
          </ProCard>


  </ProForm>
}