import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

let params: v1.EventsApiGetEventRequest = {
  // number | The ID of the event.
  eventId: 1,
};

apiInstance
  .getEvent(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
