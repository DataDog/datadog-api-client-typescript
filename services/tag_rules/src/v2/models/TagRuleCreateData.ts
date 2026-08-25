import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleCreateAttributes } from "./TagRuleCreateAttributes";
import { TagRuleResourceType } from "./TagRuleResourceType";

/**
 * Data object for creating a tag rule.
 */
export class TagRuleCreateData {
  /**
   * Attributes that can be supplied when creating a tag rule.
   */
  "attributes": TagRuleCreateAttributes;
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
      type: "TagRuleCreateAttributes",
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
    return TagRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
