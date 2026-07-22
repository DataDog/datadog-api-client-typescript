import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyScoreRelationshipData } from "./TagPolicyScoreRelationshipData";

/**
 * A relationship to the compliance score resource for this policy.
 */
export class TagPolicyScoreRelationship {
  /**
   * Identifier of the related compliance score resource.
   */
  "data": TagPolicyScoreRelationshipData;
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
      type: "TagPolicyScoreRelationshipData",
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
    return TagPolicyScoreRelationship.attributeTypeMap;
  }

  public constructor() {}
}
