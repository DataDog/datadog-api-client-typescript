import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a customer org disable request.
 */
export type CustomerOrgDisableType =
  | typeof CUSTOMER_ORG_DISABLE
  | UnparsedObject;
export const CUSTOMER_ORG_DISABLE = "customer_org_disable";
