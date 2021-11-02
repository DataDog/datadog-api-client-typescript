/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAggregateBucketValue } from "./LogsAggregateBucketValue";

export class LogsAggregateBucket {
  /**
   * The key, value pairs for each group by
   */
  "by"?: { [key: string]: string };
  /**
   * A map of the metric name -> value for regular compute or list of values for a timeseries
   */
  "computes"?: { [key: string]: LogsAggregateBucketValue };

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    by: {
      baseName: "by",
      type: "{ [key: string]: string; }",
    },
    computes: {
      baseName: "computes",
      type: "{ [key: string]: LogsAggregateBucketValue; }",
    },
  };

  static getAttributeTypeMap() {
    return LogsAggregateBucket.attributeTypeMap;
  }

  public constructor() {}
}
