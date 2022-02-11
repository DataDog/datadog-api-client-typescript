import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params:v1.AWSIntegrationApiCreateAWSTagFilterRequest = {
  // AWSTagFilterCreateRequest | Set an AWS tag filter using an `aws_account_identifier`, `namespace`, and filtering string. Namespace options are `application_elb`, `elb`, `lambda`, `network_elb`, `rds`, `sqs`, and `custom`.
  body: {
    accountId: "1234567",
    namespace: "elb",
    tagFilterStr: "prod*",
  },
};

apiInstance.createAWSTagFilter(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
