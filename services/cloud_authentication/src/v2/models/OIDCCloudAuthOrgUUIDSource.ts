import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source of the organization UUID in the signed token. The `aud` source accepts a datadog/{org_uuid} audience.
 */
export type OIDCCloudAuthOrgUUIDSource =
  | typeof DD_ORG_UUID
  | typeof AUD
  | UnparsedObject;
export const DD_ORG_UUID = "dd_org_uuid";
export const AUD = "aud";
