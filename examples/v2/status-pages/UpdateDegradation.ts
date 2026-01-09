/**
 * Update degradation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

// there is a valid "degradation" in the system
const DEGRADATION_DATA_ID = process.env.DEGRADATION_DATA_ID as string;

const params: v2.StatusPagesApiUpdateDegradationRequest = {
  body: {
    data: {
      attributes: {
        title: "5e2fd69be33e79aa",
      },
      id: DEGRADATION_DATA_ID,
      type: "degradations",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
  degradationId: DEGRADATION_DATA_ID,
};

apiInstance
  .updateDegradation(params)
  .then((data: v2.Degradation) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
