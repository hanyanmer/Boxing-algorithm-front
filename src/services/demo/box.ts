/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

export async function submitModel(body?: API.UserInfoVO, options?: { [key: string]: any }) {
  return request<API.Result_UserInfo_>('/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    data: body,
    ...(options || {}),
  });
}

/**
 * 获取car信息接口
 * @param params
 * @param options
 * @returns
 */

export async function getCarInfoList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>('http://10.100.143.33:8080/getCarInfoList', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 获取box接口
 * @param params
 * @param options
 * @returns
 */
//
export async function queryBoxList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>('/api/bins', {
  // return request<API.Result_PageInfo_UserInfo__>('http://10.100.143.33:8080/bins', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      
    },
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user */
export async function addUser(body?: API.UserInfoVO, options?: { [key: string]: any }) {
  return request<API.Result_UserInfo_>('/api/v1/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/user/${param0} */
export async function getUserDetail(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_UserInfo_>(`/api/v1/user/${param0}`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/user/${param0} */
export async function modifyUser(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_UserInfo_>(`/api/v1/user/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/v1/user/${param0} */
export async function deleteUser(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_string_>(`/api/v1/user/${param0}`, {
    method: 'DELETE',
    params: { ...params },
    ...(options || {}),
  });
}
