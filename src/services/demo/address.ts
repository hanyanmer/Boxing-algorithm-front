

import { request } from '@umijs/max';


export async function getAddressList(
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
    return request<API.Result_PageInfo_UserInfo__>('/api/Address', {
        method: 'GET',
        // params: {
        //   ...params,
        // },
        ...(options || {}),
      });
  }