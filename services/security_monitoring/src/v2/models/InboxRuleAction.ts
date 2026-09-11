import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The action to take when the inbox rule matches a finding.
 */
export class InboxRuleAction {
  /**
   * An optional description providing more context for the rule.
   */
  "description"?: string;
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
    description: {
      baseName: "description",
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
    return InboxRuleAction.attributeTypeMap;
  }

  public constructor() {}
}
