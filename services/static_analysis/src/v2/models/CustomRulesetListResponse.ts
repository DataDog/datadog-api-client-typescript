import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleset } from "./CustomRuleset";

/**
 * Response containing a list of custom rulesets for the authenticated organization.
 */
export class CustomRulesetListResponse {
  /**
   * The list of custom rulesets.
   */
  "data": Array<CustomRuleset>;
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
      type: "Array<CustomRuleset>",
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
    return CustomRulesetListResponse.attributeTypeMap;
  }

  public constructor() {}
}
