import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for an HCP Terraform persona mapping.
 */
export type TerraformCloudAuthPersonaMappingType =
  | typeof TERRAFORM_CLOUD_AUTH_CONFIG
  | UnparsedObject;
export const TERRAFORM_CLOUD_AUTH_CONFIG = "terraform_cloud_auth_config";
