/**
 * Create backfilled degradation returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID = process.env
  .STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID as string;
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiCreateBackfilledDegradationRequest = {
  body: {
    data: {
      attributes: {
        title: "Past API Outage",
        updates: [
          {
            componentsAffected: [
              {
                id: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID,
                status: "degraded",
              },
            ],
            description: "We detected elevated error rates in the API.",
            startedAt: new Date(new Date().getTime() + -1 * 3600 * 1000),
            status: "investigating",
          },
          {
            componentsAffected: [
              {
                id: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID,
                status: "degraded",
              },
            ],
            description: "Root cause identified as a misconfigured deployment.",
            startedAt: new Date(new Date().getTime() + -30 * 60 * 1000),
            status: "identified",
          },
          {
            componentsAffected: [
              {
                id: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID,
                status: "operational",
              },
            ],
            description:
              "The issue has been resolved and API is operating normally.",
            startedAt: new Date(),
            status: "resolved",
          },
        ],
      },
      type: "degradations",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
};

apiInstance
  .createBackfilledDegradation(params)
  .then((data: v2.Degradation) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
