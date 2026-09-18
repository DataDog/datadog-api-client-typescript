import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Backend type to synchronize.
 */
export type TerraformBackendKind = typeof TERRAFORM | UnparsedObject;
export const TERRAFORM = "terraform";
