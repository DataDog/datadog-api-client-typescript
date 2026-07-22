import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyScoreData } from "./TagPolicyScoreData";

/**
 * A tag policy compliance score.
 */
export class TagPolicyScoreResponse {
  /**
   * A compliance score resource for a tag policy.
   */
  "data": TagPolicyScoreData;
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
      type: "TagPolicyScoreData",
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
    return TagPolicyScoreResponse.attributeTypeMap;
  }

  public constructor() {}
}
