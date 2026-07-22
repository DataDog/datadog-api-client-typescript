import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyCreateData } from "./TagPolicyCreateData";

/**
 * Payload for creating a new tag policy.
 */
export class TagPolicyCreateRequest {
  /**
   * Data object for creating a tag policy.
   */
  "data": TagPolicyCreateData;
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
      type: "TagPolicyCreateData",
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
    return TagPolicyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
