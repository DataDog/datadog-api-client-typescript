import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyAttributesUpdateRequest } from "./TagPolicyAttributesUpdateRequest";
import { TagPolicyType } from "./TagPolicyType";

/**
 * Data envelope for tag policy update request.
 */
export class TagPolicyDataUpdateRequest {
  /**
   * Attributes for updating a tag policy. All fields are optional.
   */
  "attributes": TagPolicyAttributesUpdateRequest;
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
      type: "TagPolicyAttributesUpdateRequest",
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
    return TagPolicyDataUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
