import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleData } from "./TagIndexingRuleData";

/**
 * Response containing a single tag indexing rule.
 */
export class TagIndexingRuleResponse {
  /**
   * A tag indexing rule resource object.
   */
  "data"?: TagIndexingRuleData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "TagIndexingRuleData",
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
    return TagIndexingRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
