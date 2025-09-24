import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Result of the convert rule request containing Terraform content.
 */
export class SecurityMonitoringRuleConvertResponse {
  /**
   * the ID of the rule.
   */
  "ruleId"?: string;
  /**
   * Terraform string as a result of converting the rule from JSON.
   */
  "terraformContent"?: string;
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
    ruleId: {
      baseName: "ruleId",
      type: "string",
    },
    terraformContent: {
      baseName: "terraformContent",
      type: "string",
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
    return SecurityMonitoringRuleConvertResponse.attributeTypeMap;
  }

  public constructor() {}
}
