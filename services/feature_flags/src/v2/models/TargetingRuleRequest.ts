import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConditionRequest } from "./ConditionRequest";

/**
 * Targeting rule request payload.
 */
export class TargetingRuleRequest {
  /**
   * Conditions that must match for this rule.
   */
  "conditions": Array<ConditionRequest>;
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
      type: "Array<ConditionRequest>",
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
    return TargetingRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
