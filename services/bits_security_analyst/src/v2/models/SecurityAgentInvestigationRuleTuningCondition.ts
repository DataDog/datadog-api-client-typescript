import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A condition of a rule tuning suggestion.
 */
export class SecurityAgentInvestigationRuleTuningCondition {
  /**
   * Attribute the condition checks.
   */
  "field": string;
  /**
   * Value the attribute is compared with.
   */
  "value": string;
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
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
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
    return SecurityAgentInvestigationRuleTuningCondition.attributeTypeMap;
  }

  public constructor() {}
}
