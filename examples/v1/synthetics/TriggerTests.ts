/**
 * Trigger Synthetics tests returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_api_test" in the system
let SYNTHETICS_API_TEST_PUBLIC_ID = process.env.SYNTHETICS_API_TEST_PUBLIC_ID as string;



let params: v1.SyntheticsApiTriggerTestsRequest = {
  body: {
tests: [
{
publicId: SYNTHETICS_API_TEST_PUBLIC_ID,
},
],
},
  
};

apiInstance
  .triggerTests(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));