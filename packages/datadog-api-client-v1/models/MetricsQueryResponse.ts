/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsQueryMetadata } from "./MetricsQueryMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * Version of the response format.
   */
  "respVersion"?: number;
  /**
   * List of timeseries queried.
   */
  "series"?: Array<MetricsQueryMetadata>;
  /**
   * Status of the query.
   */
  "status"?: string;
  /**
   * Legacy field, always returned as an empty list. Timestamps are returned
   * in the `pointlist` of each entry of `series`.
   */
  "times"?: Array<any>;
  /**
   * End of requested time window, milliseconds since Unix epoch.
   */
  "toDate"?: number;
  /**
   * Legacy field, always returned as an empty list. Timeseries values are
   * returned in the `pointlist` of each entry of `series`.
   */
  "values"?: Array<any>;

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
    respVersion: {
      baseName: "resp_version",
      type: "number",
      format: "int64",
    },
    series: {
      baseName: "series",
      type: "Array<MetricsQueryMetadata>",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    times: {
      baseName: "times",
      type: "Array<any>",
    },
    toDate: {
      baseName: "to_date",
      type: "number",
      format: "int64",
    },
    values: {
      baseName: "values",
      type: "Array<any>",
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
    return MetricsQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
