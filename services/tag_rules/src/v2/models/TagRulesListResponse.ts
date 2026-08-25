import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleData } from "./TagRuleData";
import { TagRuleScoreData } from "./TagRuleScoreData";

/**
 * A page of tag rules.
 */
export class TagRulesListResponse {
  /**
   * An array of tag rule data objects.
   */
  "data": Array<TagRuleData>;
  /**
   * Related resources fetched alongside the primary tag rules. Populated when an `include` query parameter is supplied.
   */
  "included"?: Array<TagRuleScoreData>;
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
    data: {
      baseName: "data",
      type: "Array<TagRuleData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<TagRuleScoreData>",
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
    return TagRulesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
