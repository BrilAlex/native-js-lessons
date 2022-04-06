import React from "react";
import {Dispatch} from "redux";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";
import {CurrencyState, CurrencyType} from "../../redux/currencyReducer";
import {
  changeActionAC,
  changeCurrencyFieldAC,
  changeCurrentCurrencyAC,
  CurrencyReducersTypes
} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "../../redux/state";
import {selectCurrencyState} from "../../redux/selectors";

const CurrencyEContainer: React.FC = () => {

  const {
    currencies,
    currentCurrency,
    isBuying,
    amountOfBYN,
    amountOfCurrency,
  } = useSelector<IGlobalState, CurrencyState>(selectCurrencyState);

  const dispatch = useDispatch<Dispatch<CurrencyReducersTypes>>();

  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency: CurrencyType) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === 'byn') {
        if (value === '') {
          dispatch(changeCurrencyFieldAC(value, value));
        } else {
          dispatch(changeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
        }
      } else {
        if (value === '') {
          dispatch(changeCurrencyFieldAC(value, value));
        } else {
          dispatch(changeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
        }
      }
    }
  };

  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.action === 'buy' ? dispatch(changeActionAC(true)) : dispatch(changeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};

export default CurrencyEContainer;

