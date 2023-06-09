/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeMeta } from "./DowntimeMeta";
import { MonitorDowntimeMatchListItemResponse } from "./MonitorDowntimeMatchListItemResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for retrieving all downtime matches for a monitor.
 */
export class MonitorDowntimeMatchResponse {
  /**
   * An array of downtime matches.
   */
  "data"?: Array<MonitorDowntimeMatchListItemResponse>;
  /**
   * Pagination metadata returned by the API.
   */
  "meta"?: DowntimeMeta;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<MonitorDowntimeMatchListItemResponse>",
    },
    meta: {
      baseName: "meta",
      type: "DowntimeMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorDowntimeMatchResponse.attributeTypeMap;
  }

  public constructor() {}
}
