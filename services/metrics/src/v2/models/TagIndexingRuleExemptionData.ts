import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleExemptionAttributes } from "./TagIndexingRuleExemptionAttributes";
import { TagIndexingRuleExemptionType } from "./TagIndexingRuleExemptionType";

/**
 * A tag indexing rule exemption resource object.
 */
export class TagIndexingRuleExemptionData {
  /**
   * Attributes of a tag indexing rule exemption.
   */
  "attributes"?: TagIndexingRuleExemptionAttributes;
  /**
   * The metric name, used as the resource ID.
   */
  "id"?: string;
  /**
   * The tag indexing rule exemption resource type.
   */
  "type"?: TagIndexingRuleExemptionType;
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
      type: "TagIndexingRuleExemptionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TagIndexingRuleExemptionType",
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
    return TagIndexingRuleExemptionData.attributeTypeMap;
  }

  public constructor() {}
}
