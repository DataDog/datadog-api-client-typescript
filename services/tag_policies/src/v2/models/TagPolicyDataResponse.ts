import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyAttributesResponse } from "./TagPolicyAttributesResponse";
import { TagPolicyType } from "./TagPolicyType";

/**
 * Data envelope for tag policy response.
 */
export class TagPolicyDataResponse {
  /**
   * Attributes of a tag policy response.
   */
  "attributes": TagPolicyAttributesResponse;
  /**
   * The unique identifier of the tag policy.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `tag_policy`.
   */
  "type": TagPolicyType;
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
    attributes: {
      baseName: "attributes",
      type: "TagPolicyAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagPolicyType",
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
    return TagPolicyDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
