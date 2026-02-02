/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a tag policy score.
 */
export class TagPolicyScoreAttributesResponse {
  /**
   * The compliance score for the tag policy.
   */
  "score": number;
  /**
   * End timestamp for the score calculation period.
   */
  "tsEnd": number;
  /**
   * Start timestamp for the score calculation period.
   */
  "tsStart": number;
  /**
   * The version of the score.
   */
  "version"?: number;

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
    score: {
      baseName: "score",
      type: "number",
      required: true,
      format: "double",
    },
    tsEnd: {
      baseName: "ts_end",
      type: "number",
      required: true,
      format: "int64",
    },
    tsStart: {
      baseName: "ts_start",
      type: "number",
      required: true,
      format: "int64",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
    return TagPolicyScoreAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
