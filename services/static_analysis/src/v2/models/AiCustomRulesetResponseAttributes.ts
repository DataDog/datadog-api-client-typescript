import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleItem } from "./AiCustomRuleItem";

/**
 * Response attributes of an AI custom ruleset.
 */
export class AiCustomRulesetResponseAttributes {
  /**
   * The creation timestamp.
   */
  "createdAt": Date;
  /**
   * The identifier of the user who created the ruleset.
   */
  "createdBy": string;
  /**
   * Base64-encoded full description of the ruleset.
   */
  "description": string;
  /**
   * The ruleset name.
   */
  "name": string;
  /**
   * The rules contained in the ruleset.
   */
  "rules": Array<AiCustomRuleItem> | null;
  /**
   * Base64-encoded short description of the ruleset.
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
      type: "Array<AiCustomRuleItem>",
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
    return AiCustomRulesetResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
