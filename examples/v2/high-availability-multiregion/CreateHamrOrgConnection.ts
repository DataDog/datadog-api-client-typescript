/**
 * Create or update HAMR organization connection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createHamrOrgConnection"] = true;
const apiInstance = new v2.HighAvailabilityMultiRegionApi(configuration);

const params: v2.HighAvailabilityMultiRegionApiCreateHamrOrgConnectionRequest =
  {
    body: {
      data: {
        attributes: {
          hamrStatus: 4,
          isPrimary: true,
          modifiedBy: "admin@example.com",
          targetOrgDatacenter: "us1",
          targetOrgName: "Production Backup Org",
          targetOrgUuid: "660f9511-f3ac-52e5-b827-557766551111",
        },
        id: "550e8400-e29b-41d4-a716-446655440000",
        type: "hamr_org_connections",
      },
    },
  };

apiInstance
  .createHamrOrgConnection(params)
  .then((data: v2.HamrOrgConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
