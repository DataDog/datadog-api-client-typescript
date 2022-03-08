import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

let params: v1.OrganizationsApiCreateChildOrgRequest = {
  // OrganizationCreateBody | Organization object that needs to be created
  body: {
    billing: {
      type: "type_example",
    },
    name: "New child org",
    subscription: {
      type: "type_example",
    },
  },
};

apiInstance
  .createChildOrg(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
