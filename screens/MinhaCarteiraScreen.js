import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ScreenContainer } from '@draftbit/ui';
import { Alert } from 'react-native';

const MinhaCarteiraScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const responseSendEmail = response => {
    console.log(response);
  };

  const [actiobSheet1, setActiobSheet1] = React.useState('');
  const [manageMeansPaymentModal, setManageMeansPaymentModal] =
    React.useState('');
  const [transferBalanceModal, setTransferBalanceModal] = React.useState('');

  return <ScreenContainer hasSafeArea={true} scrollable={true} />;
};

export default MinhaCarteiraScreen;
