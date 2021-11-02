/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryMetricsSeries } from "./SLOHistoryMetricsSeries";

export class SLOHistoryMetrics {
  "denominator": SLOHistoryMetricsSeries;
  /**
   * The aggregated query interval for the series data. It's implicit based on the query time window.
   */
  "interval": number;
  /**
   * Optional message if there are specific query issues/warnings.
   */
  "message"?: string;
  "numerator": SLOHistoryMetricsSeries;
  /**
   * The combined numerator and denominator query CSV.
   */
  "query": string;
  /**
   * The series result type. This mimics `batch_query` response type.
   */
  "resType": string;
  /**
   * The series response version type. This mimics `batch_query` response type.
   */
  "respVersion": number;
  /**
   * An array of query timestamps in EPOCH milliseconds
   */
  "times": Array<number>;

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
    denominator: {
      baseName: "denominator",
      type: "SLOHistoryMetricsSeries",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      required: true,
      format: "int64",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    numerator: {
      baseName: "numerator",
      type: "SLOHistoryMetricsSeries",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    resType: {
      baseName: "res_type",
      type: "string",
      required: true,
    },
    respVersion: {
      baseName: "resp_version",
      type: "number",
      required: true,
      format: "int64",
    },
    times: {
      baseName: "times",
      type: "Array<number>",
      required: true,
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return SLOHistoryMetrics.attributeTypeMap;
  }

  public constructor() {}
}
