import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyDataUpdateRequest } from "./TagPolicyDataUpdateRequest";

/**
 * Request for updating a tag policy.
 */
export class TagPolicyUpdateRequest {
  /**
   * Data envelope for tag policy update request.
   */
  "data": TagPolicyDataUpdateRequest;
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
      type: "TagPolicyDataUpdateRequest",
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
