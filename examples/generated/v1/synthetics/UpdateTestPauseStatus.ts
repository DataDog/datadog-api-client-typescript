import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params: v1.SyntheticsApiUpdateTestPauseStatusRequest = {
  // string | The public ID of the Synthetic test to update.
  publicId: "public_id_example",
  // SyntheticsUpdateTestPauseStatusPayload | Status to set the given Synthetic test to.
  body: {
    newStatus: "live",
  },
};

apiInstance
  .updateTestPauseStatus(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
