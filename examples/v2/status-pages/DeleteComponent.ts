/**
 * Delete component returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_ID = process.env
  .STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_ID as string;
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiDeleteComponentRequest = {
  pageId: STATUS_PAGE_DATA_ID,
  componentId: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_ID,
};

apiInstance
  .deleteComponent(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
