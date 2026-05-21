/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationDataAttributesPotentialDailySavings } from "./CostRecommendationDataAttributesPotentialDailySavings";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing a single cost recommendation.
 */
export class CostRecommendationDataAttributes {
  /**
   * Datadog resource key identifying the recommended resource.
   */
  "ddResourceKey"?: string;
  /**
   * Estimated daily savings if the recommendation is applied.
   */
  "potentialDailySavings"?: CostRecommendationDataAttributesPotentialDailySavings;
  /**
   * The kind of recommendation (for example, `terminate` or `rightsize`).
   */
  "recommendationType"?: string;
  /**
   * Cloud provider identifier of the resource.
   */
  "resourceId"?: string;
  /**
   * Resource type (for example, `aws_ec2_instance`).
   */
  "resourceType"?: string;
  /**
   * Tags attached to the recommended resource.
   */
  "tags"?: Array<string>;

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
    ddResourceKey: {
      baseName: "dd_resource_key",
      type: "string",
    },
    potentialDailySavings: {
      baseName: "potential_daily_savings",
      type: "CostRecommendationDataAttributesPotentialDailySavings",
    },
    recommendationType: {
      baseName: "recommendation_type",
      type: "string",
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return CostRecommendationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
