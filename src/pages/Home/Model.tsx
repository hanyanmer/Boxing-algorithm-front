import { history } from "@umijs/max";
import { Button } from "antd";
import React from "react";

export default function Model() {
  return <div>
    <Button onClick={()=>history.push('/home/config')}>创建</Button>
    <div>canvas</div>
    </div>;
}
