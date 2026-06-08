import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleAttributes } from "./TagIndexingRuleAttributes";
import { TagIndexingRuleType } from "./TagIndexingRuleType";

/**
 * A tag indexing rule resource object.
 */
export class TagIndexingRuleData {
  /**
   * Attributes of a tag indexing rule.
   */
  "attributes"?: TagIndexingRuleAttributes;
  /**
   * The unique identifier (UUID) of the tag indexing rule.
   */
  "id"?: string;
  /**
   * The tag indexing rule resource type.
   */
  "type"?: TagIndexingRuleType;
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
      type: "TagIndexingRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TagIndexingRuleType",
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
    return TagIndexingRuleData.attributeTypeMap;
  }

  public constructor() {}
}
