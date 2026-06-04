import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a customer org disable response.
 */
export type CustomerOrgDisableResponseType =
  | typeof ORG_DISABLE
  | UnparsedObject;
export const ORG_DISABLE = "org_disable";
