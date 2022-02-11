import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params:v2.LogsApiSubmitLogRequest = {
  // Array<HTTPLogItem> | Log to send (JSON format).
  body: [
    {
      ddsource: "nginx",
      ddtags: "env:staging,version:5.1",
      hostname: "i-012345678",
      message: "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World",
      service: "payment",
    },
  ],
  // ContentEncoding | HTTP header used to compress the media-type. (optional)
  contentEncoding: "gzip",
  // string | Log tags can be passed as query parameters with `text/plain` content type. (optional)
  ddtags: "env:prod,user:my-user",
};

apiInstance.submitLog(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
