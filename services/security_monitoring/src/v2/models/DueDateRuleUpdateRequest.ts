import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateRuleDataUpdate } from "./DueDateRuleDataUpdate";

/**
 * The body of a due date rule update request.
 */
export class DueDateRuleUpdateRequest {
  /**
   * The data object for a due date rule update request. The `id` must match the `rule_id` path parameter.
   */
  "data": DueDateRuleDataUpdate;
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
    data: {
      baseName: "data",
      type: "DueDateRuleDataUpdate",
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
    return DueDateRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
