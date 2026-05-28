/**
 * Create an annotation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAnnotation"] = true;
const apiInstance = new v2.AnnotationsApi(configuration);

const params: v2.AnnotationsApiCreateAnnotationRequest = {
  body: {
    data: {
      attributes: {
        color: "blue",
        description: "Deployed v2.3.1 to production.",
        pageId: "dashboard:abc-def-xyz",
        startTime: 1704067200000,
        type: "pointInTime",
        widgetIds: ["1234567890"],
      },
      type: "annotation",
    },
  },
};

apiInstance
  .createAnnotation(params)
  .then((data: v2.AnnotationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
