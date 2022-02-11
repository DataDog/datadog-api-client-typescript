import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

let params:v1.EventsApiCreateEventRequest = {
  // EventCreateRequest | Event request object
  body: {
    aggregationKey: "aggregationKey_example",
    alertType: "info",
    dateHappened: 1,
    deviceName: "deviceName_example",
    host: "host_example",
    priority: "normal",
    relatedEventId: 1,
    sourceTypeName: "sourceTypeName_example",
    tags: ["environment:test"],
    text: "Oh boy!",
    title: "Did you hear the news today?",
  },
};

apiInstance.createEvent(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
