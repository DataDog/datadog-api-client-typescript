/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Total number of host currently monitored by Datadog.
 */
export class HostTotals {
  /**
   * Total number of active host (UP and ???) reporting to Datadog.
   */
  "totalActive"?: number;
  /**
   * Number of host that are UP and reporting to Datadog.
   */
  "totalUp"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    totalActive: {
      baseName: "total_active",
      type: "number",
      format: "int64",
    },
    totalUp: {
      baseName: "total_up",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostTotals.attributeTypeMap;
  }

  public constructor() {}
}
