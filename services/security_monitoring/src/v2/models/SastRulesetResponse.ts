import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SastRulesetData } from "./SastRulesetData";

/**
 * The response payload containing a single SAST ruleset and its rules.
 */
export class SastRulesetResponse {
  /**
   * The primary data object representing a SAST ruleset.
   */
  "data": SastRulesetData;
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
      type: "SastRulesetData",
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
    return SastRulesetResponse.attributeTypeMap;
  }

  public constructor() {}
}
