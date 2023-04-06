/**
 * Submit a Service Check returns "Payload accepted" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceChecksApi(configuration);

const params: v1.ServiceChecksApiSubmitServiceCheckRequest = {
  body: [
    {
      check: "app.ok",
      hostName: "host",
      status: 0,
      tags: ["test:ExampleServiceCheck"],
    },
  ],
};

apiInstance
  .submitServiceCheck(params)
  .then((data: v1.IntakePayloadAccepted) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
