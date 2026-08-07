import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleUpdateData } from "./TagRuleUpdateData";

/**
 * Payload for updating an existing tag rule. Only the supplied fields are modified.
 */
export class TagRuleUpdateRequest {
  /**
   * Data object for updating a tag rule.
   */
  "data": TagRuleUpdateData;
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
      type: "TagRuleUpdateData",
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
    return TagRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
