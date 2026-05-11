import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesetStatusRespData } from "./RulesetStatusRespData";

/**
 * Processing statuses for all tag pipeline rulesets in the specified organization.
 */
export class RulesetStatusRespArray {
  /**
   * Processing status for a tag pipeline ruleset.
   */
  "data": Array<RulesetStatusRespData>;
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
      type: "Array<RulesetStatusRespData>",
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
    return RulesetStatusRespArray.attributeTypeMap;
  }

  public constructor() {}
}
