import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params: v1.SyntheticsApiUpdatePrivateLocationRequest = {
  // string | The ID of the private location.
  locationId: "location_id_example",
  // SyntheticsPrivateLocation | Details of the private location to be updated.
  body: {
    description: "Description of private location",
    name: "New private location",
    tags: ["team:front"],
  },
};

apiInstance
  .updatePrivateLocation(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
