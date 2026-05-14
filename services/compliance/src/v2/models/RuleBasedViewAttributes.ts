import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleBasedViewRule } from "./RuleBasedViewRule";

/**
 * Attributes of the rule-based view.
 */
export class RuleBasedViewAttributes {
  /**
   * Total number of rules in the view.
   */
  "count": number;
  /**
   * List of rules in the rule-based view.
   */
  "rules": Array<RuleBasedViewRule>;
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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    rules: {
      baseName: "rules",
      type: "Array<RuleBasedViewRule>",
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
    return RuleBasedViewAttributes.attributeTypeMap;
  }

  public constructor() {}
}
