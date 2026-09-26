import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Terraform backend configuration resource type.
 */
export type TerraformBackendType = typeof TERRAFORM_BACKENDS | UnparsedObject;
export const TERRAFORM_BACKENDS = "terraform-backends";
