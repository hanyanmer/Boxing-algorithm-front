import React, { useRef, useState } from "react";
import {ProCard, ProForm, ProFormCheckbox, ProFormDependency, ProFormInstance, ProFormList, ProFormRadio, ProFormSelect, ProFormText} from '@ant-design/pro-components'
import { Alert, Button, Col, Collapse, Row, Space, Tag } from "antd";
import { useMount } from "react-use";
import { CloseSquareFilled } from "@ant-design/icons";



export function AddModel(){
  const formRef = useRef<ProFormInstance>()
  const addressRef = useRef()
  const boxRef = useRef()

  const [selectedGesture,setSelectedGesture] = useState([])

  const onFinish =async (v)=>{
    console.log('Fomrval',v)
    // v?.checkbox-group

  }
  const onValuesChange = (changeValues: any) => {
    console.log(changeValues,'hahah',typeof changeValues,changeValues.checkboxGroup)

    let v = changeValues.checkboxGroup
    if(!changeValues.checkboxGroup){
      return
    }
    console.log(changeValues.checkboxGroup,'v======',v)
    setSelectedGesture((val:any)=>{
      return  [...val,v]
    })

  }

  // 这里没有实时生效
  const ondbClickGesture = (index:number)=>{
      let temp = selectedGesture
      temp.splice(index,1)
      console.log('temp',temp)
      setSelectedGesture(()=>{
        return [...temp]
      })
  }





  return (
    <ProForm onFinish={onFinish} formRef={formRef} layout="horizontal" labelCol={{span:4}} labelAlign="right"
    onValuesChange={onValuesChange}
    submitter={{
      render: (props, doms) => {
       return  (
          <div style={{
            display:'flex',
            justifyContent:'flex-end'
          }}><Space>{doms}</Space></div>
        )
      },
    }}>
      <ProCard title="地址信息"  style={{ marginBlockEnd: 8 }}
      extra={<Button type="primary" onClick={()=>{
        console.log('which')
        addressRef?.current.add({
          boxName:''
        })
      }}>添加一个地址</Button>}
      >

      <ProFormList
      wrapperCol={{span:24}}
      actionRef={addressRef}
        name="address"
        // label="添加地址信息"
        creatorButtonProps={false}
        // todo:这个要替换位置
        // creatorButtonProps={{
        //   creatorButtonText: '添加一个地址',
        // }}
        deleteIconProps={{
          tooltipText:'删除该地址信息'
        }}
        min={1}
        max={5}
        // copyIconProps={false}
        itemRender={({ listDom, action }, { index }) => (
          <ProCard
            bordered
            style={{ marginBlockEnd: 8 }}
            title={`第${index + 1}个地址`}
            extra={action}
            bodyStyle={{ paddingBlockEnd: 0 }}
          >
            {listDom}
          </ProCard>
        )}
        creatorRecord={{ name: '', items: [{ name: '' }] }}
        initialValue={[
          { addName: '颜色'},
        ]}
      >
        <ProFormSelect
          style={{ padding: 0 }}
          width="md"
          name="addName"
          label="地址"
          placeholder="选择或者输入地址"

        />

<ProCard title="箱子信息"
// extra={<Button type="primary" onClick={()=>{
//         boxRef?.current.add({
//           boxName:''
//         })
//       }}>添加一个箱子</Button>}
      >
<ProFormList
actionRef={boxRef}
        name="box"
        // label="添加地址信息"
        creatorButtonProps={{
          creatorButtonText: '添加一个箱子',
        }}
        // creatorButtonProps={false}
        min={1}
        max={5}
        copyIconProps={false}
        itemRender={({ listDom, action }, { index }) => (
          // boxShadow:'2px 2px 2px rgba(0, 0, 0, 0.5)'
         <div style={{backgroundColor:'#dddad9',borderRadius:'10px',padding:'0 10px',marginBottom:"10px"}}>
 {/* <div><Button type="primary">添加箱子</Button></div> */}
          <div style={{padding:'10px 0'}}>第{index + 1}个箱子</div>
         {listDom}{action}
         </div>
        )}
        // creatorRecord={{ name: '', items: [{ name: '' }] }}
        initialValue={[
          { boxName: '颜色'},
        ]}
      >

{/* todo:名称关联箱子的宽高 */}
{/* todo:如何区分填写的还是选择的  */}
<ProForm.Group>
            <ProFormSelect
         width="md"
          name="boxName"
          label="名称"
          request={async()=>{
            return [
              {
                label:'2寸箱子',
                value:'1,2,3'
              }
            ]
          }}
        />
        <ProFormDependency name={["boxName"]} >
          {
            ({boxName})=>{
              console.log('boxnamae',boxName)
              if(boxName){
                console.log('1')
                // todo 这里可以用最终boxName的值做最后的提交拼接
                return <div style={{display:'flex',width:'720px'}} >
                  <Col xs={6}> <Tag bordered={false} color="processing">
        length:
      </Tag>{100}cm</Col>
                  <Col xs={6}> <Tag bordered={false} color="orange">
        width:
      </Tag>{200}cm</Col>
                  <Col xs={6}> <Tag bordered={false} color="cyan">
        dep:
      </Tag>{300}cm</Col>
                  </div>
              }else{
                console.log('2')
                return <div style={{display:'inline-grid',}}>
                <Space><ProFormText name="width" label="宽度"  width="md" ></ProFormText>
        <ProFormText name="boxHeight" label="高度" width="md" ></ProFormText>
        <ProFormText name="boxDepth" label="深度"  width="md"></ProFormText></Space>
                </div>
              }
            }
          }
        </ProFormDependency>
        {/* <ProFormDependency name={["boxName"]} >
          {
            ({boxName})=>{
              console.log('boxnamae',boxName)
              return (
<ProFormText name="boxHeight" label="高度" width="md" ></ProFormText>
              )
            }
          }
        </ProFormDependency>
        <ProFormDependency name={["boxName"]} >
          {
            ({boxName})=>{
              console.log('boxnamae',boxName)
              return (
                <ProFormText name="boxDepth" label="深度"  width="md"></ProFormText>
              )
            }
          }
        </ProFormDependency> */}

            </ProForm.Group>


      </ProFormList>
</ProCard>



      </ProFormList>

      </ProCard>

      {/* 这里不麻烦选中后 直接set就可以了 */}

    <ProCard title="汽车信息" wrap colSpan={{xs:24,sm:24,md:24,lg:24,xl:24}}  style={{ marginBlockEnd: 8 }}
    >
      <ProFormSelect label="一键查询汽车信息" labelCol={{span:6}} width="md"></ProFormSelect>
   <ProCard title="车头信息"  bordered
            style={{ marginBlockEnd: 8 }}
            colSpan={{xs:24 ,sm:24}}
            // title={`第${index + 1}个地址`}
            // extra={action}
            bodyStyle={{ paddingBlockEnd: 0 }}>
   <ProForm.Group>

         <ProFormText name="boxWidth" label="宽度"  width="md"></ProFormText>
          <ProFormText name="boxHeight" label="高度" width="md"></ProFormText>
          <ProFormText name="boxDepth" label="深度"  width="md"></ProFormText>
            </ProForm.Group>
   </ProCard>
   <ProCard title="车中信息"  bordered
            style={{ marginBlockEnd: 8 }}
            colSpan={{xs:24 ,sm:24}}
            // title={`第${index + 1}个地址`}
            // extra={action}
            bodyStyle={{ paddingBlockEnd: 0 }}>
   <ProForm.Group>

         <ProFormText name="boxWidth" label="宽度"  width="md"></ProFormText>
          <ProFormText name="boxHeight" label="高度" width="md"></ProFormText>
          <ProFormText name="boxDepth" label="深度"  width="md"></ProFormText>
            </ProForm.Group>
   </ProCard>
   <ProCard title="车尾信息"  bordered
            style={{ marginBlockEnd: 8 }}
            colSpan={{xs:24 ,sm:24}}
            // title={`第${index + 1}个地址`}
            // extra={action}
            bodyStyle={{ paddingBlockEnd: 0 }}>
   <ProForm.Group>

         <ProFormText name="boxWidth" label="宽度"  width="md"></ProFormText>
          <ProFormText name="boxHeight" label="高度" width="md"></ProFormText>
          <ProFormText name="boxDepth" label="深度"  width="md"></ProFormText>
            </ProForm.Group>
   </ProCard>
    </ProCard>
    <ProCard title="调试信息"  style={{ marginBlockEnd: 8 }}>
      <ProCard bordered  style={{ marginBlockEnd: 8 }}
            colSpan={{xs:24 ,sm:24}}
            bodyStyle={{ paddingBlockEnd: 0 }}>
               <Alert style={{textAlign:'center'}} message="双击元素进行删除" type="info"
                closable
      //          closable={{
      //   'aria-label': 'close',
      //   closeIcon: <CloseSquareFilled />,
      // }}
      // onClose={ (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      //   console.log(e, 'I was closed.');
      // }}
      />
              <div><span style={{width:'235px',textAlign:'right',display:'inline-block',margin:'10px'}}>选中的顺序为:</span>
              {

               selectedGesture&& selectedGesture?.map((gesture,index)=>{
                  return (
                    <Tag   key={index} bordered={false} color="processing" onDoubleClick={()=>ondbClickGesture(index)}>
                  <span style={{display:'inline-block',width:'20px',textAlign:'center'}}>{gesture}</span>
                </Tag>
                  )
                })
              }
              </div>

               <ProFormRadio.Group


name="checkboxGroup"


radioType="button"
label="姿态类型（请按顺序点击）"
options={['A', 'B', 'C', 'D', 'E', 'F']}

/>




                    <ProFormRadio.Group
  name="radio-group"
  label="缝隙分配方式"
  options={[
    {
      label: '左中右平均分配',
      value: 'a',
    },
    {
      label: '分配到中间',
      value: 'b',
    },

  ]}
/>

      </ProCard>



    </ProCard>
    </ProForm>
  );
};
