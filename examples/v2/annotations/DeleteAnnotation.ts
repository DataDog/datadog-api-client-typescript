/**
 * Delete an annotation returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteAnnotation"] = true;
const apiInstance = new v2.AnnotationsApi(configuration);

// there is a valid "annotation" in the system
const ANNOTATION_DATA_ID = process.env.ANNOTATION_DATA_ID as string;

const params: v2.AnnotationsApiDeleteAnnotationRequest = {
  annotationId: ANNOTATION_DATA_ID,
};

apiInstance
  .deleteAnnotation(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
