import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch } from '../../store/store';
import "./customSnackbar.scss";
import { setAppNotice } from '../../store/appReducer';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref,
) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export const CustomSnackbar: React.FC<PropsType> = ({ appNoticeState }) => {
   const dispatch = useAppDispatch()
   const isOpen = !!appNoticeState.appNotice
   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
         return;
      }
      dispatch(setAppNotice({ appNotice: '', isError: false }))
   };
   return (
      <Snackbar className="custom-snackbar" open={isOpen} autoHideDuration={3000} onClose={handleClose}>
         <Alert onClose={handleClose} severity={`${!appNoticeState.isError ? 'success' : 'error'}`} sx={{ width: '100%' }}>
            <span className="custom-snackbar__text">{appNoticeState.appNotice}</span>
         </Alert>
      </Snackbar>
   );
}
type PropsType = {
   appNoticeState: {
      isError: boolean
      appNotice: string
   }
}