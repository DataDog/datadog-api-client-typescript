/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionAggregationTargetType } from "./ProductAnalyticsRetentionAggregationTargetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Selects the rolled-up row that aggregates every cohort, rather than a single cohort.
 */
export class ProductAnalyticsRetentionAggregationTarget {
  /**
   * The discriminator identifying a target selected by aggregation.
   */
  "type": ProductAnalyticsRetentionAggregationTargetType;
  /**
   * The aggregation that produced the rolled-up row.
   */
  "value": string;

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
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionAggregationTargetType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
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
    return ProductAnalyticsRetentionAggregationTarget.attributeTypeMap;
  }

  public constructor() {}
}
