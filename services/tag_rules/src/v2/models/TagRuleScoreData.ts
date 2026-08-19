import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleScoreAttributes } from "./TagRuleScoreAttributes";
import { TagRuleScoreResourceType } from "./TagRuleScoreResourceType";

/**
 * A compliance score resource for a tag rule.
 */
export class TagRuleScoreData {
  /**
   * Attributes of a tag rule compliance score.
   */
  "attributes": TagRuleScoreAttributes;
  /**
   * The unique identifier of the compliance score resource.
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
    attributes: {
      baseName: "attributes",
      type: "TagRuleScoreAttributes",
      required: true,
    },
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
    return TagRuleScoreData.attributeTypeMap;
  }

  public constructor() {}
}
