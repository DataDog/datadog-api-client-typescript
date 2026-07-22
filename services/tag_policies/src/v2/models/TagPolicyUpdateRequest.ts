import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyUpdateData } from "./TagPolicyUpdateData";

/**
 * Payload for updating an existing tag policy. Only the supplied fields are modified.
 */
export class TagPolicyUpdateRequest {
  /**
   * Data object for updating a tag policy.
   */
  "data": TagPolicyUpdateData;
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
      type: "TagPolicyUpdateData",
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
    return TagPolicyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
