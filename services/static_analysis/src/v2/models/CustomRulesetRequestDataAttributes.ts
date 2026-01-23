import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRule } from "./CustomRule";

export class CustomRulesetRequestDataAttributes {
  /**
   * Base64-encoded full description
   */
  "description"?: string;
  /**
   * Ruleset name
   */
  "name"?: string;
  /**
   * Rules in the ruleset
   */
  "rules"?: Array<CustomRule>;
  /**
   * Base64-encoded short description
   */
  "shortDescription"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    rules: {
      baseName: "rules",
      type: "Array<CustomRule>",
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
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
    return CustomRulesetRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
