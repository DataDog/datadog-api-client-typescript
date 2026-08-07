import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleScoreResourceType } from "./TagRuleScoreResourceType";

/**
 * Identifier of the related compliance score resource.
 */
export class TagRuleScoreRelationshipData {
  /**
   * The unique identifier of the related compliance score resource.
   */
  "id": string;
  /**
   * JSON:API resource type for a tag rule compliance score.
   */
  "type": TagRuleScoreResourceType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagRuleScoreResourceType",
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
    return TagRuleScoreRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
