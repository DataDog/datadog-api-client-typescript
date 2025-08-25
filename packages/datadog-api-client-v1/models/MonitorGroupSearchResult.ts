/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorOverallStates } from "./MonitorOverallStates";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single monitor group search result.
 */
export class MonitorGroupSearchResult {
  /**
   * The name of the group.
   */
  "group"?: string;
  /**
   * The list of tags of the monitor group.
   */
  "groupTags"?: Array<string>;
  /**
   * Latest timestamp the monitor group was in NO_DATA state.
   */
  "lastNodataTs"?: number;
  /**
   * Latest timestamp the monitor group triggered.
   */
  "lastTriggeredTs"?: number;
  /**
   * The ID of the monitor.
   */
  "monitorId"?: number;
  /**
   * The name of the monitor.
   */
  "monitorName"?: string;
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
    group: {
      baseName: "group",
      type: "string",
    },
    groupTags: {
      baseName: "group_tags",
      type: "Array<string>",
    },
    lastNodataTs: {
      baseName: "last_nodata_ts",
      type: "number",
      format: "int64",
    },
    lastTriggeredTs: {
      baseName: "last_triggered_ts",
      type: "number",
      format: "int64",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      format: "int64",
    },
    monitorName: {
      baseName: "monitor_name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "MonitorOverallStates",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorGroupSearchResult.attributeTypeMap;
  }

  public constructor() {}
}
