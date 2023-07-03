/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeRelationshipsMonitorData } from "./DowntimeRelationshipsMonitorData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The monitor identified by the downtime.
 */
export class DowntimeRelationshipsMonitor {
  /**
   * Data for the monitor.
   */
  "data"?: DowntimeRelationshipsMonitorData;

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
      type: "DowntimeRelationshipsMonitorData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeRelationshipsMonitor.attributeTypeMap;
  }

  public constructor() {}
}
