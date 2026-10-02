/**
 * Delete subject type returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "experiment_subject_type" in the system
const EXPERIMENT_SUBJECT_TYPE_DATA_ID = process.env
  .EXPERIMENT_SUBJECT_TYPE_DATA_ID as string;

const params: v2.ExperimentsApiDeleteSubjectTypeRequest = {
  subjectTypeId: EXPERIMENT_SUBJECT_TYPE_DATA_ID,
};

apiInstance
  .deleteSubjectType(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
