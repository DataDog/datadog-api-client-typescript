import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleUpdateData } from "./TagIndexingRuleUpdateData";

/**
 * Request body for updating a tag indexing rule.
 */
export class TagIndexingRuleUpdateRequest {
  /**
   * Data object for updating a tag indexing rule.
   */
  "data": TagIndexingRuleUpdateData;
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
      type: "TagIndexingRuleUpdateData",
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
    return TagIndexingRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
