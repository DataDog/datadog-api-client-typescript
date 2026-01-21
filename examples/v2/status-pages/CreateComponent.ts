/**
 * Create component returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiCreateComponentRequest = {
  body: {
    data: {
      attributes: {
        name: "Logs",
        position: 0,
        type: "component",
      },
      type: "components",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
};

apiInstance
  .createComponent(params)
  .then((data: v2.StatusPagesComponent) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
