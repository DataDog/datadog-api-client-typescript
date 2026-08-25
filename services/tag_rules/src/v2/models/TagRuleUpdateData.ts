import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleResourceType } from "./TagRuleResourceType";
import { TagRuleUpdateAttributes } from "./TagRuleUpdateAttributes";

/**
 * Data object for updating a tag rule.
 */
export class TagRuleUpdateData {
  /**
   * Mutable attributes of a tag rule. Each field is optional; omitting a field leaves its
   * current value unchanged. The `source` of a rule cannot be changed.
   */
  "attributes"?: TagRuleUpdateAttributes;
  /**
   * The unique identifier of the tag rule being updated.
   */
  "id": string;
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
      type: "TagRuleUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return TagRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
