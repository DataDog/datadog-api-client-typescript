import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleExemptionCreateData } from "./TagIndexingRuleExemptionCreateData";

/**
 * Request body for creating a tag indexing rule exemption.
 */
export class TagIndexingRuleExemptionCreateRequest {
  /**
   * Data object for creating a tag indexing rule exemption.
   */
  "data": TagIndexingRuleExemptionCreateData;
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
      type: "TagIndexingRuleExemptionCreateData",
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
    return TagIndexingRuleExemptionCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
