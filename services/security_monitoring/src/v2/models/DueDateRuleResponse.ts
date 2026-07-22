import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateRuleDataResponse } from "./DueDateRuleDataResponse";

/**
 * A single due date rule response.
 */
export class DueDateRuleResponse {
  /**
   * The data object for a due date rule returned by the API.
   */
  "data": DueDateRuleDataResponse;
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
    data: {
      baseName: "data",
      type: "DueDateRuleDataResponse",
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
    return DueDateRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
