import { UnparsedObject } from "@datadog/datadog-api-client";

import { ServiceNowBasicAuthUpdate } from "./ServiceNowBasicAuthUpdate";

/**
 * The definition of the `ServiceNowCredentialsUpdate` object.
 */
export type ServiceNowCredentialsUpdate =
  | ServiceNowBasicAuthUpdate
  | UnparsedObject;
