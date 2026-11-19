import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformCloudAuthIssuerURL } from "./TerraformCloudAuthIssuerURL";

/**
 * Attributes for creating an HCP Terraform persona mapping.
 */
export class TerraformCloudAuthPersonaMappingCreateAttributes {
  /**
   * Handle or email address of the Datadog user or service account that matching tokens authenticate as. Its permissions must not exceed the caller's.
   */
  "accountIdentifier": string;
  /**
   * HCP Terraform workload identity token issuer. Use `https://app.terraform.io` for HCP Terraform in the US or `https://app.eu.terraform.io` for HCP Terraform in Europe.
   */
  "issuerUrl": TerraformCloudAuthIssuerURL;
  /**
   * Pattern matched against the `sub` claim of HCP Terraform workload identity tokens. Use `organization:<org>:project:<project>:workspace:<workspace>:run_phase:<plan|apply>` for workspace runs, or `organization:<org>:module:<module>:operation:test_run` for module test runs. Segments are HCP Terraform names, not IDs.
   * Any segment except the organization can be `*` to match any value.
   */
  "subPattern": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountIdentifier: {
      baseName: "account_identifier",
      type: "string",
      required: true,
    },
    issuerUrl: {
      baseName: "issuer_url",
      type: "TerraformCloudAuthIssuerURL",
      required: true,
    },
    subPattern: {
      baseName: "sub_pattern",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TerraformCloudAuthPersonaMappingCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
