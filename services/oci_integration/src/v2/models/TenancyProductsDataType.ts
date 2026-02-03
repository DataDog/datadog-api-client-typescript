import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * OCI tenancy product resource type.
 */
export type TenancyProductsDataType =
  | typeof OCI_TENANCY_PRODUCT
  | UnparsedObject;
export const OCI_TENANCY_PRODUCT = "oci_tenancy_product";
