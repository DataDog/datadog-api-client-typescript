import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReorderRuleResourceData } from "./ReorderRuleResourceData";

/**
 * The definition of `ReorderRuleResourceArray` object.
 */
export class ReorderRuleResourceArray {
  /**
   * The `ReorderRuleResourceArray` `data`.
   */
  "data": Array<ReorderRuleResourceData>;
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
      type: "Array<ReorderRuleResourceData>",
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
    return ReorderRuleResourceArray.attributeTypeMap;
  }

  public constructor() {}
}
