/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsQueryMetadata } from "./MetricsQueryMetadata";

import { AttributeTypeMap } from "../util";

/**
 * Response Object that includes your query and the list of metrics retrieved.
 */
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

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricsQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
