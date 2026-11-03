/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorOverallStates } from "./MonitorOverallStates";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Monitor state for a single group.
 */
export class MonitorStateGroup {
  /**
   * Latest timestamp the monitor was in NO_DATA state.
   */
  "lastNodataTs"?: Int64;
  /**
   * Latest timestamp of the notification sent for this monitor group.
   */
  "lastNotifiedTs"?: Int64;
  /**
   * Latest timestamp the monitor group was resolved.
   */
  "lastResolvedTs"?: Int64;
  /**
   * Latest timestamp the monitor group triggered.
   */
  "lastTriggeredTs"?: Int64;
  /**
   * The name of the monitor.
   */
  "name"?: string;
  /**
   * The different states your monitor can be in.
   */
  "status"?: MonitorOverallStates;

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
    lastNodataTs: {
      baseName: "last_nodata_ts",
      type: "number",
      format: "int64",
    },
    lastNotifiedTs: {
      baseName: "last_notified_ts",
      type: "number",
      format: "int64",
    },
    lastResolvedTs: {
      baseName: "last_resolved_ts",
      type: "number",
      format: "int64",
    },
    lastTriggeredTs: {
      baseName: "last_triggered_ts",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "MonitorOverallStates",
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
    return MonitorStateGroup.attributeTypeMap;
  }

  public constructor() {}
}
