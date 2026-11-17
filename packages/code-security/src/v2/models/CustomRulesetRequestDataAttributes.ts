import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { CustomRule } from "./CustomRule";

/**
 * Attributes for creating or updating a custom ruleset. `name` is required and must
 * equal the resource `id`; the server rejects a mismatch with a 412 response.
 */
export class CustomRulesetRequestDataAttributes {
  /**
   * Base64-encoded full description
   */
  "description"?: string;
  /**
   * Ruleset name, which must be the same as the resource identifier.
   */
  "name": string;
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
      required: true,
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
