import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateRuleAttributesCreate } from "./DueDateRuleAttributesCreate";
import { DueDateRuleType } from "./DueDateRuleType";

/**
 * The data object for a due date rule update request. The `id` must match the `rule_id` path parameter.
 */
export class DueDateRuleDataUpdate {
  /**
   * Attributes for creating or updating a due date rule.
   */
  "attributes": DueDateRuleAttributesCreate;
  /**
   * The ID of the due date rule to update.
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
  "additionalProperties"?: { [key: string]: any };
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
    return DueDateRuleDataUpdate.attributeTypeMap;
  }

  public constructor() {}
}
