import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyCreateAttributes } from "./TagPolicyCreateAttributes";
import { TagPolicyResourceType } from "./TagPolicyResourceType";

/**
 * Data object for creating a tag policy.
 */
export class TagPolicyCreateData {
  /**
   * Attributes that can be supplied when creating a tag policy.
   */
  "attributes": TagPolicyCreateAttributes;
  /**
   * JSON:API resource type for a tag policy.
   */
  "type": TagPolicyResourceType;
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
      type: "TagPolicyCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagPolicyResourceType",
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
    return TagPolicyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
