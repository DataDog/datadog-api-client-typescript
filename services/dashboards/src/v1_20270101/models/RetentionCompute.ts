import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsAggregator } from "./EventsAggregator";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionCompute {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": EventsAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metric": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "EventsAggregator",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionCompute.attributeTypeMap;
  }

  public constructor() {}
}
