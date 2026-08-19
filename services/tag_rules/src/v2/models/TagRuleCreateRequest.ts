import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleCreateData } from "./TagRuleCreateData";

/**
 * Payload for creating a new tag rule.
 */
export class TagRuleCreateRequest {
  /**
   * Data object for creating a tag rule.
   */
  "data": TagRuleCreateData;
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
      type: "TagRuleCreateData",
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
    return TagRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
