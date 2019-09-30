import Left from 'modules/growthHacks/containers/priorityMatrix/Left';
import { ContentContainer } from 'modules/growthHacks/styles';
import React from 'react';
import Chart from './Chart';

type Props = {
  queryParams: any;
  datas: any[];
  priorityMatrixRefetch: () => void;
};

class Content extends React.Component<Props> {
  render() {
    const { datas, priorityMatrixRefetch, queryParams } = this.props;

    return (
      <ContentContainer>
        <Left
          priorityMatrixRefetch={priorityMatrixRefetch}
          queryParams={queryParams}
        />
        <Chart datas={datas} />
      </ContentContainer>
    );
  }
}

export default Content;
