/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsListRequestTime } from "./LogsListRequestTime";
import { LogsSort } from "./LogsSort";

import { AttributeTypeMap } from "../util";

/**
 * Object to send with the request to retrieve a list of logs from your Organization.
 */
export class LogsListRequest {
  /**
   * The log index on which the request is performed. For multi-index organizations,
   * the default is all live indexes. Historical indexes of rehydrated logs must be specified.
   */
  "index"?: string;
  /**
   * Number of logs return in the response.
   */
  "limit"?: number;
  /**
   * The search query - following the log search syntax.
   */
  "query"?: string;
  /**
   * Time-ascending `asc` or time-descending `desc`results.
   */
  "sort"?: LogsSort;
  /**
   * Hash identifier of the first log to return in the list, available in a log `id` attribute.
   * This parameter is used for the pagination feature.
   *
   * **Note**: This parameter is ignored if the corresponding log
   * is out of the scope of the specified time window.
   */
  "startAt"?: string;
  /**
   * Timeframe to retrieve the log from.
   */
  "time": LogsListRequestTime;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    index: {
      baseName: "index",
      type: "string",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    sort: {
      baseName: "sort",
      type: "LogsSort",
    },
    startAt: {
      baseName: "startAt",
      type: "string",
    },
    time: {
      baseName: "time",
      type: "LogsListRequestTime",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsListRequest.attributeTypeMap;
  }

  public constructor() {}
}
