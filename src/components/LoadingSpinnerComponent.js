import React, {Component} from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
export const LoadingSpinnerComponent = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="spinner">
        <Loader type="BallTriangle" color="#f03" height={80} width={80} />
      </div>
    )
  );
};

