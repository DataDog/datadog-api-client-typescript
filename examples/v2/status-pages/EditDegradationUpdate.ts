/**
 * Edit degradation update returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

const params: v2.StatusPagesApiEditDegradationUpdateRequest = {
  body: {
    data: {
      attributes: {
        description:
          "We've identified the source of the latency increase and are deploying a fix.",
        status: "identified",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "degradation_updates",
    },
  },
  degradationId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  pageId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  updateId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .editDegradationUpdate(params)
  .then((data: v2.DegradationUpdate) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
