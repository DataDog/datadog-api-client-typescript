/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsElapsedTime } from "./ProductAnalyticsElapsedTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Breakdown of a funnel step for one combination of group-by values.
 */
export class ProductAnalyticsJourneyFunnelStepGroup {
  /**
   * Number of entities in this group that reached the next step.
   */
  "conversionCount": number;
  /**
   * Elapsed time statistics (min/max/avg in milliseconds).
   */
  "elapsedTimeToNextStep": ProductAnalyticsElapsedTime;
  /**
   * Group-by values identifying this cohort.
   */
  "groupTags": Array<string>;
  /**
   * Value of the computed metric for this group at this step.
   */
  "value": number;

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
    conversionCount: {
      baseName: "conversion_count",
      type: "number",
      required: true,
      format: "int64",
    },
    elapsedTimeToNextStep: {
      baseName: "elapsed_time_to_next_step",
      type: "ProductAnalyticsElapsedTime",
      required: true,
    },
    groupTags: {
      baseName: "group_tags",
      type: "Array<string>",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
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
    return ProductAnalyticsJourneyFunnelStepGroup.attributeTypeMap;
  }

  public constructor() {}
}
