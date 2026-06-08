import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleType } from "./TagIndexingRuleType";
import { TagIndexingRuleUpdateAttributes } from "./TagIndexingRuleUpdateAttributes";

/**
 * Data object for updating a tag indexing rule.
 */
export class TagIndexingRuleUpdateData {
  /**
   * Attributes for updating a tag indexing rule. All fields are optional; omitted fields are unchanged.
   */
  "attributes"?: TagIndexingRuleUpdateAttributes;
  /**
   * The tag indexing rule resource type.
   */
  "type": TagIndexingRuleType;
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
      type: "TagIndexingRuleUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "TagIndexingRuleType",
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
    return TagIndexingRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
