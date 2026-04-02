/**
 * Unpublish status page returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiUnpublishStatusPageRequest = {
  pageId: STATUS_PAGE_DATA_ID,
};

apiInstance
  .unpublishStatusPage(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
