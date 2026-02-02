import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyDataRequest } from "./TagPolicyDataRequest";

/**
 * Request for creating a tag policy.
 */
export class TagPolicyCreateRequest {
  /**
   * Data envelope for tag policy create request.
   */
  "data": TagPolicyDataRequest;
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
      type: "TagPolicyDataRequest",
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
