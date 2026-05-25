import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SastRulesetData } from "./SastRulesetData";

/**
 * The response payload containing a list of SAST rulesets and their rules.
 */
export class SastRulesetsResponse {
  /**
   * The list of SAST rulesets returned in the response.
   */
  "data": Array<SastRulesetData>;
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
      type: "Array<SastRulesetData>",
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
    return SastRulesetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
