import Api from '@/services/demo/index';
import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormInstance,
  ProFormList,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Alert, Button, Col, Space, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';

export function AddModel() {
  const formRef = useRef<ProFormInstance>();
  const addressRef = useRef();
  const boxRef = useRef();

  // const [selectedGesture, setSelectedGesture] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [curCarKey, setCurCarKey] = useState('');

  const onFinish = async (v) => {
    console.log(v, 'v');
    let _addressList: any = [];
    v?.addressList.map((item) => {
      let _box = [];
      if (item?.box) {
        item?.box?.map((_item) => {
          console.log('_item', _item);
          _box.push({
            boxWidth: _item?.boxWidth,
            boxHeight: _item?.boxHeight,
            boxLength: _item?.boxLength,
            boxNum: _item?.boxNum,
          });
        });
      }
      console.log('item', item);
      _addressList.push({
        box: _box,
        addressName: item?.addressName,
      });
    });
    console.log(_addressList, '_addressLlist');
    const params = {
      addressList: _addressList,
      container: {
        frontLength: v?.frontLength,
        frontWidth: v?.frontWidth,
        frontHeight: v?.frontHeight,
        middleLength: v?.middleLength,
        middleWidth: v?.middleWidth,
        middleHeight: v?.middleHeight,
        tailLength: v?.tailLength,
        tailWidth: v?.tailWidth,
        tailHeight: v?.tailHeight,
      },
      arrageGap: v?.arrageGap,
      statusList,
    };
    console.log('params', params);
    return;
    // v?.checkbox-group
    Api.UserController.submitModel(params as any);
  };
  const onValuesChange = (changeValues: any) => {
    console.log(changeValues, 'hahah', typeof changeValues, changeValues.checkboxGroup);

    let v = changeValues.checkboxGroup;
    if (!changeValues.checkboxGroup) {
      return;
    }
    console.log(changeValues.checkboxGroup, 'v======', v);
    setStatusList((val: any) => {
      return [...val, v];
    });
  };

  useEffect(() => {
    if (curCarKey) {
      //
    }
  }, [curCarKey]);

  // 这里没有实时生效
  const ondbClickGesture = (index: number) => {
    let temp = setStatusList;
    temp.splice(index, 1);
    console.log('temp', temp);
    setStatusList(() => {
      return [...temp];
    });
  };

  return (
    <ProForm
      onFinish={onFinish}
      formRef={formRef}
      layout="horizontal"
      labelCol={{ span: 4 }}
      labelAlign="right"
      onValuesChange={onValuesChange}
      submitter={{
        render: (props, doms) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Space>{doms}</Space>
            </div>
          );
        },
      }}
    >
      <ProCard
        title="地址信息"
        style={{ marginBlockEnd: 8 }}
        extra={
          <Button
            type="primary"
            onClick={() => {
              console.log('which');
              addressRef?.current.add({
                boxName: '',
              });
            }}
          >
            添加一个地址
          </Button>
        }
      >
        <ProFormList
          wrapperCol={{ span: 24 }}
          actionRef={addressRef}
          name="addressList"
          // label="添加地址信息"
          creatorButtonProps={false}
          // todo:这个要替换位置
          // creatorButtonProps={{
          //   creatorButtonText: '添加一个地址',
          // }}
          deleteIconProps={{
            tooltipText: '删除该地址信息',
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
          creatorRecord={{ addressName: '', items: [{ name: '' }] }}
          initialValue={[{ addressName: '' }]}
        >
          <ProFormSelect
            style={{ padding: 0 }}
            width="md"
            name="addressName"
            label="地址"
            placeholder="选择或者输入地址"
            request={async () => [
              { label: '南航', value: '将军大道' },
              { label: '托乐嘉', value: '托乐嘉' },
              { label: '河西', value: '河西大街' },
              { label: '南宁', value: '南宁' },
            ]}
          />

          <ProCard
            title="箱子信息"
            // extra={<Button type="primary" onClick={()=>{
            //         boxRef?.current.add({
            //           boxName:''
            //         })
            //       }}>添加一个箱子</Button>}
          >
            <ProFormList
              actionRef={boxRef}
              name="box"
              style={{ marginBlockEnd: 8 }}
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
                <div
                  style={{
                    backgroundColor: '#dddad9',
                    borderRadius: '10px',
                    padding: '0 10px',
                    marginBottom: '10px',
                  }}
                >
                  {/* <div><Button type="primary">添加箱子</Button></div> */}
                  <div style={{ padding: '10px 0' }}>第{index + 1}个箱子</div>
                  {listDom}
                  {action}
                </div>
              )}
              // creatorRecord={{ name: '', items: [{ name: '' }] }}
              initialValue={[{ boxName: '颜色' }]}
            >
              {/* todo:名称关联箱子的宽高 */}
              {/* todo:如何区分填写的还是选择的  */}
              <ProForm.Group>
                <ProFormSelect
                  width="md"
                  name="boxName"
                  label="名称"
                  request={async () => {
                    return [
                      {
                        label: '2寸箱子',
                        value: '1,2,3',
                      },
                    ];
                  }}
                />
                <ProFormDependency name={['boxName']}>
                  {({ boxName }) => {
                    console.log('boxnamae', boxName);
                    if (boxName) {
                      console.log('1');
                      // todo 这里可以用最终boxName的值做最后的提交拼接
                      return (
                        <div style={{ display: 'flex', width: '720px' }}>
                          <Col xs={6}>
                            <Tag bordered={false} color="processing">
                              length:
                            </Tag>
                            {100}cm
                          </Col>
                          <Col xs={6}>
                            <Tag bordered={false} color="orange">
                              width:
                            </Tag>
                            {200}cm
                          </Col>
                          <Col xs={6}>
                            <Tag bordered={false} color="cyan">
                              dep:
                            </Tag>
                            {300}cm
                          </Col>
                        </div>
                      );
                    } else {
                      return (
                        <div style={{ display: 'inline-grid' }}>
                          <Space>
                            <ProFormDigit name="boxLength" label="宽度" width="md"></ProFormDigit>
                            <ProFormDigit name="boxWidth" label="高度" width="md"></ProFormDigit>
                            <ProFormDigit name="boxHeight" label="深度" width="md"></ProFormDigit>
                          </Space>
                        </div>
                      );
                    }
                  }}
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
              <ProFormText label="箱子数量" name="boxNum" width="md" />
            </ProFormList>
          </ProCard>
        </ProFormList>
      </ProCard>

      {/* 这里不麻烦选中后 直接set就可以了 */}

      <ProCard
        title="汽车信息"
        wrap
        colSpan={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }}
        style={{ marginBlockEnd: 8 }}
      >
        <ProFormSelect label="一键查询汽车信息" labelCol={{ span: 6 }} width="md"></ProFormSelect>
        <ProCard
          title="车头信息"
          bordered
          style={{ marginBlockEnd: 8 }}
          colSpan={{ xs: 24, sm: 24 }}
          // title={`第${index + 1}个地址`}
          // extra={action}
          bodyStyle={{ paddingBlockEnd: 0 }}
        >
          <ProForm.Group>
            <ProFormDigit name="frontLength" label="宽度" width="md"></ProFormDigit>
            <ProFormDigit name="frontWidth" label="高度" width="md"></ProFormDigit>
            <ProFormDigit name="frontHeight" label="深度" width="md"></ProFormDigit>
          </ProForm.Group>
        </ProCard>
        {/* container */}
        <ProCard
          title="车中信息"
          bordered
          style={{ marginBlockEnd: 8 }}
          colSpan={{ xs: 24, sm: 24 }}
          // title={`第${index + 1}个地址`}
          // extra={action}
          bodyStyle={{ paddingBlockEnd: 0 }}
        >
          <ProForm.Group>
            <ProFormDigit name="middleLength" label="宽度" width="md"></ProFormDigit>
            <ProFormDigit name="middleWidth" label="高度" width="md"></ProFormDigit>
            <ProFormDigit name="middleHeight" label="深度" width="md"></ProFormDigit>
          </ProForm.Group>
        </ProCard>
        <ProCard
          title="车尾信息"
          bordered
          style={{ marginBlockEnd: 8 }}
          colSpan={{ xs: 24, sm: 24 }}
          // title={`第${index + 1}个地址`}
          // extra={action}
          bodyStyle={{ paddingBlockEnd: 0 }}
        >
          <ProForm.Group>
            <ProFormDigit name="tailLength" label="宽度" width="md"></ProFormDigit>
            <ProFormDigit name="tailWidth" label="高度" width="md"></ProFormDigit>
            <ProFormDigit name="tailHeight" label="深度" width="md"></ProFormDigit>
          </ProForm.Group>
        </ProCard>
      </ProCard>
      <ProCard title="调试信息" style={{ marginBlockEnd: 8 }}>
        <ProCard
          bordered
          style={{ marginBlockEnd: 8 }}
          colSpan={{ xs: 24, sm: 24 }}
          bodyStyle={{ paddingBlockEnd: 0 }}
        >
          <Alert
            style={{ textAlign: 'center' }}
            message="双击元素进行删除"
            type="info"
            closable
            //          closable={{
            //   'aria-label': 'close',
            //   closeIcon: <CloseSquareFilled />,
            // }}
            // onClose={ (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            //   console.log(e, 'I was closed.');
            // }}
          />
          <div>
            <span
              style={{
                width: '235px',
                textAlign: 'right',
                display: 'inline-block',
                margin: '10px',
              }}
            >
              选中的顺序为:
            </span>
            {statusList &&
              statusList?.map((gesture, index) => {
                return (
                  <Tag
                    key={index}
                    bordered={false}
                    color="processing"
                    onDoubleClick={() => ondbClickGesture(index)}
                  >
                    <span style={{ display: 'inline-block', width: '20px', textAlign: 'center' }}>
                      {gesture}
                    </span>
                  </Tag>
                );
              })}
          </div>

          {/* statusList */}
          <ProFormRadio.Group
            name="checkboxGroup"
            radioType="button"
            label="姿态类型（请按顺序点击）"
            options={[1, 2, 3, 4, 5, 6]}
          />

          <ProFormRadio.Group
            name="arrageGap"
            label="缝隙分配方式"
            options={[
              {
                label: '左中右平均分配',
                value: 1,
              },
              {
                label: '分配到中间',
                value: 0,
              },
            ]}
          />
        </ProCard>
      </ProCard>
    </ProForm>
  );
}
