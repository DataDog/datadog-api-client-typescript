import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReorderRulesetResourceData } from "./ReorderRulesetResourceData";

/**
 * The definition of `ReorderRulesetResourceArray` object.
 */
export class ReorderRulesetResourceArray {
  /**
   * The `ReorderRulesetResourceArray` `data`.
   */
  "data": Array<ReorderRulesetResourceData>;
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
      type: "Array<ReorderRulesetResourceData>",
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
    return ReorderRulesetResourceArray.attributeTypeMap;
  }

  public constructor() {}
}
