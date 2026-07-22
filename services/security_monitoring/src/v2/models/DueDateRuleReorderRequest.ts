import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateRuleReorderItem } from "./DueDateRuleReorderItem";

/**
 * The body of the due date rule reorder request.
 */
export class DueDateRuleReorderRequest {
  /**
   * The ordered list of all due date rules; every rule must be included.
   */
  "data": Array<DueDateRuleReorderItem>;
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
      type: "Array<DueDateRuleReorderItem>",
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
    return DueDateRuleReorderRequest.attributeTypeMap;
  }

  public constructor() {}
}
