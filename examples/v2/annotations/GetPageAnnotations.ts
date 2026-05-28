/**
 * Get annotations for a page returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getPageAnnotations"] = true;
const apiInstance = new v2.AnnotationsApi(configuration);

// there is a valid "annotation" in the system
const ANNOTATION_DATA_ATTRIBUTES_PAGE_ID = process.env
  .ANNOTATION_DATA_ATTRIBUTES_PAGE_ID as string;

const params: v2.AnnotationsApiGetPageAnnotationsRequest = {
  pageId: ANNOTATION_DATA_ATTRIBUTES_PAGE_ID,
  startTime: 1704067200000,
  endTime: 1704153600000,
};

apiInstance
  .getPageAnnotations(params)
  .then((data: v2.PageAnnotationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
