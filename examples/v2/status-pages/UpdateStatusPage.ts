/**
 * Update status page returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiUpdateStatusPageRequest = {
  body: {
    data: {
      attributes: {
        name: "A Status Page in US1",
      },
      id: STATUS_PAGE_DATA_ID,
      type: "status_pages",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
};

apiInstance
  .updateStatusPage(params)
  .then((data: v2.StatusPage) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
