/**
 * Create degradation returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID = process.env
  .STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID as string;
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiCreateDegradationRequest = {
  body: {
    data: {
      attributes: {
        componentsAffected: [
          {
            id: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID,
            status: "major_outage",
          },
        ],
        description:
          "Our API is experiencing elevated latency. We are investigating the issue.",
        status: "investigating",
        title: "Elevated API Latency",
      },
      type: "degradations",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
};

apiInstance
  .createDegradation(params)
  .then((data: v2.Degradation) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
