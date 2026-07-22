import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleCreateData } from "./TagIndexingRuleCreateData";

/**
 * Request body for creating a tag indexing rule.
 */
export class TagIndexingRuleCreateRequest {
  /**
   * Data object for creating a tag indexing rule.
   */
  "data": TagIndexingRuleCreateData;
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
      type: "TagIndexingRuleCreateData",
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
    return TagIndexingRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
