import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterCondition } from "./SavedFilterCondition";

/**
 * A targeting rule in a saved filter. A rule matches when all its conditions match.
 */
export class SavedFilterTargetingRule {
  /**
   * Conditions combined with AND within this targeting rule.
   */
  "conditions": Array<SavedFilterCondition>;
  /**
   * The ID of the targeting rule.
   */
  "id": string;
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
      type: "Array<SavedFilterCondition>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return SavedFilterTargetingRule.attributeTypeMap;
  }

  public constructor() {}
}
