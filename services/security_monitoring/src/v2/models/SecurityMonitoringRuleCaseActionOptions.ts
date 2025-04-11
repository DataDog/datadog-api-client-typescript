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
   * Used with the case action of type 'user_behavior'. The value specified in this field is applied as a risk tag to all users affected by the rule.
   */
  "userBehaviorName"?: string;
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
    userBehaviorName: {
      baseName: "userBehaviorName",
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
    return SecurityMonitoringRuleCaseActionOptions.attributeTypeMap;
  }

  public constructor() {}
}
