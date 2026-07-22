import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateRuleAttributesCreate } from "./DueDateRuleAttributesCreate";
import { DueDateRuleType } from "./DueDateRuleType";

/**
 * The data object for a due date rule create or update request.
 */
export class DueDateRuleDataCreate {
  /**
   * Attributes for creating or updating a due date rule.
   */
  "attributes": DueDateRuleAttributesCreate;
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
    attributes: {
      baseName: "attributes",
      type: "DueDateRuleAttributesCreate",
      required: true,
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
    return DueDateRuleDataCreate.attributeTypeMap;
  }

  public constructor() {}
}
