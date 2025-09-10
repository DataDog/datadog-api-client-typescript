import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A condition that must be met to trigger the notification rule.
 */
export class IncidentNotificationRuleConditionsItems {
  /**
   * The incident field to evaluate
   */
  "field": string;
  /**
   * The value(s) to compare against. Multiple values are `ORed` together.
   */
  "values": Array<string>;
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
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return IncidentNotificationRuleConditionsItems.attributeTypeMap;
  }

  public constructor() {}
}
