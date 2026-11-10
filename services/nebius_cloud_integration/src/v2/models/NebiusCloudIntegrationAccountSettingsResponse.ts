import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings configured on the Nebius Cloud integration account.
 */
export class NebiusCloudIntegrationAccountSettingsResponse {
  /**
   * Tags applied to all data collected from this Nebius Cloud account.
   */
  "accountTags"?: Array<string>;
  /**
   * ID of the Nebius tenant being monitored.
   */
  "tenantId": string;
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
    accountTags: {
      baseName: "account_tags",
      type: "Array<string>",
    },
    tenantId: {
      baseName: "tenant_id",
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
    return NebiusCloudIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
