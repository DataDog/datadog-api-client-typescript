/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPolicyScoreAttributesResponse } from "./TagPolicyScoreAttributesResponse";
import { TagPolicyScoreType } from "./TagPolicyScoreType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
