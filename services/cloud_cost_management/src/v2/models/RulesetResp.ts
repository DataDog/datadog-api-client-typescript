import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesetRespData } from "./RulesetRespData";

/**
 * The definition of `RulesetResp` object.
 */
export class RulesetResp {
  /**
   * The definition of `RulesetRespData` object.
   */
  "data"?: RulesetRespData;
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
      type: "RulesetRespData",
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
    return RulesetResp.attributeTypeMap;
  }

  public constructor() {}
}
