import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Conditions for `conditional_recipients`.
 */
export class MonitorNotificationRuleCondition {
  /**
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'. Cannot be used with `conditional_recipients`.
   */
  "recipients": Array<string>;
  /**
   * The scope to which the monitor applied.
   */
  "scope": string;
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
    recipients: {
      baseName: "recipients",
      type: "Array<string>",
      required: true,
    },
    scope: {
      baseName: "scope",
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
    return MonitorNotificationRuleCondition.attributeTypeMap;
  }

  public constructor() {}
}
