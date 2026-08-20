/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsElapsedTime } from "./ProductAnalyticsElapsedTime";
import { ProductAnalyticsJourneyFunnelStep } from "./ProductAnalyticsJourneyFunnelStep";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a journey funnel response.
 */
export class ProductAnalyticsJourneyFunnelResponseAttributes {
  /**
   * Conversion rate from the first step to the last step.
   */
  "endToEndConversionRate": number;
  /**
   * Elapsed time statistics (min/max/avg in milliseconds).
   */
  "endToEndElapsedTime": ProductAnalyticsElapsedTime;
  /**
   * The funnel steps, in the order given by the search expression.
   */
  "funnelSteps": Array<ProductAnalyticsJourneyFunnelStep>;
  /**
   * Number of entities that entered the funnel.
   */
  "initialCount": number;

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
    endToEndConversionRate: {
      baseName: "end_to_end_conversion_rate",
      type: "number",
      required: true,
      format: "double",
    },
    endToEndElapsedTime: {
      baseName: "end_to_end_elapsed_time",
      type: "ProductAnalyticsElapsedTime",
      required: true,
    },
    funnelSteps: {
      baseName: "funnel_steps",
      type: "Array<ProductAnalyticsJourneyFunnelStep>",
      required: true,
    },
    initialCount: {
      baseName: "initial_count",
      type: "number",
      required: true,
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
    return ProductAnalyticsJourneyFunnelResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
