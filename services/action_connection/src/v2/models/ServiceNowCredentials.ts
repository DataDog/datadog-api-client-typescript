import { UnparsedObject } from "@datadog/datadog-api-client";

import { ServiceNowBasicAuth } from "./ServiceNowBasicAuth";

/**
 * The definition of the `ServiceNowCredentials` object.
 */
export type ServiceNowCredentials = ServiceNowBasicAuth | UnparsedObject;
