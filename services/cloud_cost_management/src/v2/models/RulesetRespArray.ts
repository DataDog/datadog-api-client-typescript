import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesetRespData } from "./RulesetRespData";

/**
 * The definition of `RulesetRespArray` object.
 */
export class RulesetRespArray {
  /**
   * The `RulesetRespArray` `data`.
   */
  "data": Array<RulesetRespData>;
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
      type: "Array<RulesetRespData>",
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
    return RulesetRespArray.attributeTypeMap;
  }

  public constructor() {}
}
