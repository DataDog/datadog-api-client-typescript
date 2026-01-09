/**
 * Update component returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_ID = process.env
  .STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_ID as string;
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiUpdateComponentRequest = {
  body: {
    data: {
      attributes: {
        name: "5e2fd69be33e79aa",
      },
      id: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_ID,
      type: "components",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
  componentId: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_ID,
};

apiInstance
  .updateComponent(params)
  .then((data: v2.StatusPagesComponent) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
