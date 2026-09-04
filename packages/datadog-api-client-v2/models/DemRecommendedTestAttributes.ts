/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an AI-recommended synthetic test for a DEM journey.
 */
export class DemRecommendedTestAttributes {
  /**
   * The browser test configuration that can be used to create the recommended test.
   */
  "config": { [key: string]: any };
  /**
   * The time when the recommendation was generated.
   */
  "createdAt": Date;
  /**
   * The display name of the recommended test.
   */
  "name": string;
  /**
   * The identifier of the validating sample run, when available.
   */
  "resultId"?: string;
  /**
   * The RUM session identifier for the validating sample run, when available.
   */
  "sessionId"?: string;
  /**
   * The pipeline that produced the recommendation.
   */
  "source": string;
  /**
   * The type of synthetic test.
   */
  "type": string;
  /**
   * The variant associated with the recommendation, when applicable.
   */
  "variantId"?: string;

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
    config: {
      baseName: "config",
      type: "{ [key: string]: any; }",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    resultId: {
      baseName: "result_id",
      type: "string",
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    variantId: {
      baseName: "variant_id",
      type: "string",
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
    return DemRecommendedTestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
