import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsProtocolConditionInput } from "./ExperimentsProtocolConditionInput";

/**
 * A targeting rule in the protocol template.
 */
export class ExperimentsProtocolTargetingRuleInput {
  /**
   * Conditions in this rule.
   */
  "conditions"?: Array<ExperimentsProtocolConditionInput>;
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
    conditions: {
      baseName: "conditions",
      type: "Array<ExperimentsProtocolConditionInput>",
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
    return ExperimentsProtocolTargetingRuleInput.attributeTypeMap;
  }

  public constructor() {}
}
