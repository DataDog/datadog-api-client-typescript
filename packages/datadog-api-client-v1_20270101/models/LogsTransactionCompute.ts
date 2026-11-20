/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsAggregator } from "./EventsAggregator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogsTransactionCompute {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": EventsAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "facet": string;

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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsTransactionCompute.attributeTypeMap;
  }

  public constructor() {}
}
