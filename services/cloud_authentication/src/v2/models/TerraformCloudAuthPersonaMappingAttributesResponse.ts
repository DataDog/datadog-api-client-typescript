import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Stored HCP Terraform persona mapping attributes.
 */
export class TerraformCloudAuthPersonaMappingAttributesResponse {
  /**
   * Handle of the mapped Datadog account, resolved when the mapping was created.
   */
  "accountIdentifier": string;
  /**
   * UUID of the mapped Datadog user or service account.
   */
  "accountUuid": string;
  /**
   * Audience to set as the `TFC_WORKLOAD_IDENTITY_AUDIENCE_DATADOG` environment variable in HCP Terraform. Datadog computes this value as `datadog/<organization UUID>`.
   */
  "audience"?: string;
  /**
   * HCP Terraform workload identity token issuer. Empty for mappings created before the issuer was required.
   */
  "issuerUrl"?: string;
  /**
   * Pattern matched against the `sub` claim of HCP Terraform workload identity tokens.
   */
  "subPattern": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
    accountUuid: {
      baseName: "account_uuid",
      type: "string",
      required: true,
    },
    audience: {
      baseName: "audience",
      type: "string",
    },
    issuerUrl: {
      baseName: "issuer_url",
      type: "string",
    },
    subPattern: {
      baseName: "sub_pattern",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TerraformCloudAuthPersonaMappingAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
