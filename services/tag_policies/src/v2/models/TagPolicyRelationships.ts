import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyScoreRelationship } from "./TagPolicyScoreRelationship";

/**
 * Related resources for a tag policy. Only present when the corresponding `include` query parameter is supplied.
 */
export class TagPolicyRelationships {
  /**
   * A relationship to the compliance score resource for this policy.
   */
  "score"?: TagPolicyScoreRelationship;
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
    score: {
      baseName: "score",
      type: "TagPolicyScoreRelationship",
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
    return TagPolicyRelationships.attributeTypeMap;
  }

  public constructor() {}
}
