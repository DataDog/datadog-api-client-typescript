import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * OCI tenancy resource type.
 */
export type UpdateTenancyConfigDataType = typeof OCI_TENANCY | UnparsedObject;
export const OCI_TENANCY = "oci_tenancy";
