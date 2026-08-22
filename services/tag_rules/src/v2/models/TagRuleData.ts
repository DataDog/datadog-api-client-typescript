import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleAttributes } from "./TagRuleAttributes";
import { TagRuleRelationships } from "./TagRuleRelationships";
import { TagRuleResourceType } from "./TagRuleResourceType";

/**
 * A tag rule resource.
 */
export class TagRuleData {
  /**
   * The attributes of a tag rule resource.
   */
  "attributes": TagRuleAttributes;
  /**
   * The unique identifier of the tag rule.
   */
  "id": string;
  /**
   * Related resources for a tag rule. Only present when the corresponding `include` query parameter is supplied.
   */
  "relationships"?: TagRuleRelationships;
  /**
   * JSON:API resource type for a tag rule.
   */
  "type": TagRuleResourceType;
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
      type: "TagRuleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "TagRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "TagRuleResourceType",
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
    return TagRuleData.attributeTypeMap;
  }

  public constructor() {}
}
