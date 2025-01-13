import { configureStore } from '@reduxjs/toolkit';
import { adminApi } from '../redux/api/adminApi';
import adminReducer from '../redux/slices/adminSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
