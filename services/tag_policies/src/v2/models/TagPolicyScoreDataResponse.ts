import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyScoreAttributesResponse } from "./TagPolicyScoreAttributesResponse";
import { TagPolicyScoreType } from "./TagPolicyScoreType";

/**
 * Data envelope for tag policy score response.
 */
export class TagPolicyScoreDataResponse {
  /**
   * Attributes of a tag policy score.
   */
  "attributes": TagPolicyScoreAttributesResponse;
  /**
   * The unique identifier of the score.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `tag_policy_score`.
   */
  "type": TagPolicyScoreType;
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
      type: "TagPolicyScoreAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagPolicyScoreType",
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
    return TagPolicyScoreDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
