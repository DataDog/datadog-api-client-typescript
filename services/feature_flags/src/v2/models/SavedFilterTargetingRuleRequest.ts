import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterConditionRequest } from "./SavedFilterConditionRequest";

/**
 * A replacement saved filter targeting rule.
 */
export class SavedFilterTargetingRuleRequest {
  /**
   * Inline conditions combined with AND. Must contain at least one condition.
   */
  "conditions": Array<SavedFilterConditionRequest>;
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
      type: "Array<SavedFilterConditionRequest>",
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
    return SavedFilterTargetingRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
