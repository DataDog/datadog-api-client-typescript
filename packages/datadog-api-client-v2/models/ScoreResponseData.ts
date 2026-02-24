/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScoreResponseAttributes } from "./ScoreResponseAttributes";
import { ScoreType } from "./ScoreType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Score data.
 */
export class ScoreResponseData {
  /**
   * Score attributes.
   */
  "attributes": ScoreResponseAttributes;
  /**
   * The unique ID of the score entity.
   */
  "id": string;
  /**
   * The JSON:API type for scores.
   */
  "type": ScoreType;

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
      type: "ScoreResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ScoreType",
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
    return ScoreResponseData.attributeTypeMap;
  }

  public constructor() {}
}
