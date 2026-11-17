import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of OCI config.
 */
export type OCIConfigType = typeof OCI_CONFIG | UnparsedObject;
export const OCI_CONFIG = "oci_config";
