import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRule } from "./CustomRule";

export class CustomRulesetAttributes {
  /**
   * Creation timestamp
   */
  "createdAt": Date;
  /**
   * Creator identifier
   */
  "createdBy": string;
  /**
   * Base64-encoded full description
   */
  "description": string;
  /**
   * Ruleset name
   */
  "name": string;
  /**
   * Rules in the ruleset
   */
  "rules": Array<CustomRule> | null;
  /**
   * Base64-encoded short description
   */
  "shortDescription": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<CustomRule>",
      required: true,
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
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
    return CustomRulesetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
