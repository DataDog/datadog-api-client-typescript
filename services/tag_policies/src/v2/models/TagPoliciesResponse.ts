import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyDataResponse } from "./TagPolicyDataResponse";

/**
 * Response for listing tag policies.
 */
export class TagPoliciesResponse {
  /**
   * List of tag policies.
   */
  "data": Array<TagPolicyDataResponse>;
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
      type: "Array<TagPolicyDataResponse>",
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
    return TagPoliciesResponse.attributeTypeMap;
  }

  public constructor() {}
}
