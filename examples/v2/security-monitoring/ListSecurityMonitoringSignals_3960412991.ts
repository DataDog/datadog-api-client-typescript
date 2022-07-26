/**
 * Get a quick list of security signals returns "OK" response with pagination
 */

import * as fs from "fs";
import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiListSecurityMonitoringSignalsRequest = {
  pageLimit: 2,

};
  try {
    // @ts-ignore
    for await (const item of apiInstance.listSecurityMonitoringSignalsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error)
  }