import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyAttributes } from "./TagPolicyAttributes";
import { TagPolicyRelationships } from "./TagPolicyRelationships";
import { TagPolicyResourceType } from "./TagPolicyResourceType";

/**
 * A tag policy resource.
 */
export class TagPolicyData {
  /**
   * The attributes of a tag policy resource.
   */
  "attributes": TagPolicyAttributes;
  /**
   * The unique identifier of the tag policy.
   */
  "id": string;
  /**
   * Related resources for a tag policy. Only present when the corresponding `include` query parameter is supplied.
   */
  "relationships"?: TagPolicyRelationships;
  /**
   * JSON:API resource type for a tag policy.
   */
  "type": TagPolicyResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "TagPolicyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "TagPolicyRelationships",
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
    return TagPolicyData.attributeTypeMap;
  }

  public constructor() {}
}
