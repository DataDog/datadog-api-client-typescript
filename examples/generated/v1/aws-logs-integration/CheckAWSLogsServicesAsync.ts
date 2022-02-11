import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

let params:v1.AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest = {
  // AWSLogsServicesRequest | Check AWS Logs Async Services request body.
  body: {
    accountId: "1234567",
    services: ["s3","elb","elbv2","cloudfront","redshift","lambda"],
  },
};

apiInstance.checkAWSLogsServicesAsync(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
