/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Define computation for a log query.
 */
export class LogsQueryCompute {
  /**
   * The aggregation method.
   */
  "aggregation": string;
  /**
   * Facet name.
   */
  "facet"?: string;
  /**
   * Define a time interval in seconds.
   */
  "interval"?: number;

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
      type: "string",
      required: true,
    },
    facet: {
      baseName: "facet",
      type: "string",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsQueryCompute.attributeTypeMap;
  }

  public constructor() {}
}
