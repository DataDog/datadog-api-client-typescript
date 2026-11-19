import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HCP Terraform workload identity token issuer. Use `https://app.terraform.io` for HCP Terraform in the US or `https://app.eu.terraform.io` for HCP Terraform in Europe.
 */
export type TerraformCloudAuthIssuerURL =
  | typeof US
  | typeof EU
  | UnparsedObject;
export const US = "https://app.terraform.io";
export const EU = "https://app.eu.terraform.io";
