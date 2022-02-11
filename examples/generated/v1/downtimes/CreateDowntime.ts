import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiCreateDowntimeRequest = {
  // Downtime | Schedule a downtime request body.
  body: {
    disabled: false,
    end: 1412793983,
    message: "Message on the downtime",
    monitorId: 123456,
    monitorTags: ["*"],
    parentId: 123,
    recurrence: {
      period: 1,
      rrule: "FREQ=MONTHLY;BYSETPOS=3;BYDAY=WE;INTERVAL=1",
      type: "weeks",
      untilDate: 1447786293,
      untilOccurrences: 2,
      weekDays: ["Mon","Tue"],
    },
    scope: ["env:staging"],
    start: 1412792983,
    timezone: "America/New_York",
  },
};

apiInstance.createDowntime(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
