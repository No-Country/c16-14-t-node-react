import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut, selectCurrentToken } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState()
    const token = selectCurrentToken(state)
    console.log(`Login ${token}`);
    if(token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers;
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if(result?.error?.originalStatus === 403) {
    console.log('Sending refresh token');
    //send the refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions) //endpoint para el refresh token (crearlo en el backend)
    console.log(refreshResult);
    if(refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }))
      //retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result;
}

export const apiSlice = createApi( {
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})