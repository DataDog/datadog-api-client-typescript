import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Options for the rule action
 */
export class SecurityMonitoringRuleCaseActionOptions {
  /**
   * Duration of the action in seconds. 0 indicates no expiration.
   */
  "duration"?: number;
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
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringRuleCaseActionOptions.attributeTypeMap;
  }

  public constructor() {}
}
