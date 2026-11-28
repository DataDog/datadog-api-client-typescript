/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarInterval } from "./CalendarInterval";
import { EventsAggregator } from "./EventsAggregator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeCompute {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": EventsAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "interval"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metric"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "rollup"?: CalendarInterval;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source"?: string;

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
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rollup: {
      baseName: "rollup",
      type: "CalendarInterval",
    },
    source: {
      baseName: "source",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompositeCompute.attributeTypeMap;
  }

  public constructor() {}
}
