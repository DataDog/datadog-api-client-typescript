import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of OCI config.
 */
export type OCIConfigType = typeof OCI_CONFIG | UnparsedObject;
export const OCI_CONFIG = "oci_config";
