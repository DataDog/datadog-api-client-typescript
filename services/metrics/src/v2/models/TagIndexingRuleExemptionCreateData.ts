import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleExemptionCreateAttributes } from "./TagIndexingRuleExemptionCreateAttributes";
import { TagIndexingRuleExemptionType } from "./TagIndexingRuleExemptionType";

/**
 * Data object for creating a tag indexing rule exemption.
 */
export class TagIndexingRuleExemptionCreateData {
  /**
   * Attributes for creating a tag indexing rule exemption.
   */
  "attributes": TagIndexingRuleExemptionCreateAttributes;
  /**
   * The tag indexing rule exemption resource type.
   */
  "type": TagIndexingRuleExemptionType;
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
      type: "TagIndexingRuleExemptionCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagIndexingRuleExemptionType",
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
    return TagIndexingRuleExemptionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
