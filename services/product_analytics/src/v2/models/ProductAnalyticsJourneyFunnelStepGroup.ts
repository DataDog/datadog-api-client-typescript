import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsElapsedTime } from "./ProductAnalyticsElapsedTime";

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
