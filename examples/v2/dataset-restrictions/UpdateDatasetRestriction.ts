/**
 * Update a dataset restriction returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateDatasetRestriction"] = true;
const apiInstance = new v2.DatasetRestrictionsApi(configuration);

const params: v2.DatasetRestrictionsApiUpdateDatasetRestrictionRequest = {
  body: {
    data: {
      attributes: {
        ownershipMode: "team_tag_based",
        restrictionMode: "default_hide",
        unrestrictedPrincipals: [],
      },
      type: "dataset_restrictions",
    },
  },
  productType: "product_type",
};

apiInstance
  .updateDatasetRestriction(params)
  .then((data: v2.DatasetRestrictionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
