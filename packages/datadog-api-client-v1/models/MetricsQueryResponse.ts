/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricsQueryMetadata } from "./MetricsQueryMetadata";

export class MetricsQueryResponse {
  /**
   * Message indicating the errors if status is not `ok`.
   */
  "error"?: string;
  /**
   * Start of requested time window, milliseconds since Unix epoch.
   */
  "fromDate"?: number;
  /**
   * List of tag keys on which to group.
   */
  "groupBy"?: Array<string>;
  /**
   * Message indicating `success` if status is `ok`.
   */
  "message"?: string;
  /**
   * Query string
   */
  "query"?: string;
  /**
   * Type of response.
   */
  "resType"?: string;
  /**
   * List of timeseries queried.
   */
  "series"?: Array<MetricsQueryMetadata>;
  /**
   * Status of the query.
   */
  "status"?: string;
  /**
   * End of requested time window, milliseconds since Unix epoch.
   */
  "toDate"?: number;

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
    error: {
      baseName: "error",
      type: "string",
    },
    fromDate: {
      baseName: "from_date",
      type: "number",

      format: "int64",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    resType: {
      baseName: "res_type",
      type: "string",
    },
    series: {
      baseName: "series",
      type: "Array<MetricsQueryMetadata>",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    toDate: {
      baseName: "to_date",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return MetricsQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
