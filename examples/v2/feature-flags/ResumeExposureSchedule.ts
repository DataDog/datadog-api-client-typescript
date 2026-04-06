/**
 * Resume a progressive rollout returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiResumeExposureScheduleRequest = {
  exposureScheduleId: "550e8400-e29b-41d4-a716-446655440010",
};

apiInstance
  .resumeExposureSchedule(params)
  .then((data: v2.AllocationExposureScheduleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
