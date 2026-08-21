import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsElapsedTime } from "./ProductAnalyticsElapsedTime";
import { ProductAnalyticsJourneyFunnelStepGroup } from "./ProductAnalyticsJourneyFunnelStepGroup";

/**
 * A single step of the funnel with its conversion counts and timings.
 */
export class ProductAnalyticsJourneyFunnelStep {
  /**
   * Elapsed time statistics (min/max/avg in milliseconds).
   */
  "elapsedTimeToNextStep": ProductAnalyticsElapsedTime;
  /**
   * Breakdown of this step by the requested group-by facets.
   */
  "groups": Array<ProductAnalyticsJourneyFunnelStepGroup>;
  /**
   * Label of the step, derived from the node alias.
   */
  "label": string;
  /**
   * Unit of the elapsed time values.
   */
  "unit": string;
  /**
   * Value of the computed metric at this step.
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
    elapsedTimeToNextStep: {
      baseName: "elapsed_time_to_next_step",
      type: "ProductAnalyticsElapsedTime",
      required: true,
    },
    groups: {
      baseName: "groups",
      type: "Array<ProductAnalyticsJourneyFunnelStepGroup>",
      required: true,
    },
    label: {
      baseName: "label",
      type: "string",
      required: true,
    },
    unit: {
      baseName: "unit",
      type: "string",
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
    return ProductAnalyticsJourneyFunnelStep.attributeTypeMap;
  }

  public constructor() {}
}
