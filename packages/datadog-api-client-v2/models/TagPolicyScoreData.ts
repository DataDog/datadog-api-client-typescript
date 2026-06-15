/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPolicyScoreAttributes } from "./TagPolicyScoreAttributes";
import { TagPolicyScoreResourceType } from "./TagPolicyScoreResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A compliance score resource for a tag policy.
 */
export class TagPolicyScoreData {
  /**
   * Attributes of a tag policy compliance score.
   */
  "attributes": TagPolicyScoreAttributes;
  /**
   * The unique identifier of the compliance score resource.
   */
  "id": string;
  /**
   * JSON:API resource type for a tag policy compliance score.
   */
  "type": TagPolicyScoreResourceType;

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
      type: "TagPolicyScoreAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagPolicyScoreResourceType",
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
    return TagPolicyScoreData.attributeTypeMap;
  }

  public constructor() {}
}
