/**
 * Get a critical asset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "critical_asset" in the system
const CRITICAL_ASSET_DATA_ID = process.env.CRITICAL_ASSET_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetSecurityMonitoringCriticalAssetRequest =
  {
    criticalAssetId: CRITICAL_ASSET_DATA_ID,
  };

apiInstance
  .getSecurityMonitoringCriticalAsset(params)
  .then((data: v2.SecurityMonitoringCriticalAssetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
