import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ApplicationSecurityWafCustomRuleActionParameters` object.
 */
export class ApplicationSecurityWafCustomRuleActionParameters {
  /**
   * The location to redirect to when the WAF custom rule triggers.
   */
  "location"?: string;
  /**
   * The status code to return when the WAF custom rule triggers.
   */
  "statusCode"?: number;
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
    location: {
      baseName: "location",
      type: "string",
    },
    statusCode: {
      baseName: "status_code",
      type: "number",
      format: "int64",
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
    return ApplicationSecurityWafCustomRuleActionParameters.attributeTypeMap;
  }

  public constructor() {}
}
