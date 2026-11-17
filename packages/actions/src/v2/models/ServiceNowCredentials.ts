import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ServiceNowBasicAuth } from "./ServiceNowBasicAuth";

/**
 * The definition of the `ServiceNowCredentials` object.
 */
export type ServiceNowCredentials = ServiceNowBasicAuth | UnparsedObject;
