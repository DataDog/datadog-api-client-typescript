/**
 * Update an annotation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateAnnotation"] = true;
const apiInstance = new v2.AnnotationsApi(configuration);

// there is a valid "annotation" in the system
const ANNOTATION_DATA_ID = process.env.ANNOTATION_DATA_ID as string;

const params: v2.AnnotationsApiUpdateAnnotationRequest = {
  body: {
    data: {
      attributes: {
        color: "green",
        description: "Updated annotation.",
        pageId: "dashboard:abc-def-xyz",
        startTime: 1704067200000,
        type: "pointInTime",
      },
      type: "annotation",
    },
  },
  annotationId: ANNOTATION_DATA_ID,
};

apiInstance
  .updateAnnotation(params)
  .then((data: v2.AnnotationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
