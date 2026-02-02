import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyScoreDataResponse } from "./TagPolicyScoreDataResponse";

/**
 * Response for a tag policy score.
 */
export class TagPolicyScoreResponse {
  /**
   * Data envelope for tag policy score response.
   */
  "data": TagPolicyScoreDataResponse;
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
      type: "TagPolicyScoreDataResponse",
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
