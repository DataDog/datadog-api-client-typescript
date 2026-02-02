import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyAttributesRequest } from "./TagPolicyAttributesRequest";
import { TagPolicyType } from "./TagPolicyType";

/**
 * Data envelope for tag policy create request.
 */
export class TagPolicyDataRequest {
  /**
   * Attributes for creating or updating a tag policy.
   */
  "attributes": TagPolicyAttributesRequest;
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
      type: "TagPolicyAttributesRequest",
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
    return TagPolicyDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
