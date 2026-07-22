import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateRuleType } from "./DueDateRuleType";

/**
 * A reference to a due date rule used for reordering.
 */
export class DueDateRuleReorderItem {
  /**
   * The ID of the automation rule.
   */
  "id": string;
  /**
   * The JSON:API type for due date rules.
   */
  "type": DueDateRuleType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "DueDateRuleType",
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
    return DueDateRuleReorderItem.attributeTypeMap;
  }

  public constructor() {}
}
