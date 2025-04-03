import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorOverallStates } from "./MonitorOverallStates";

/**
 * Monitor state for a single group.
 */
export class MonitorStateGroup {
  /**
   * Latest timestamp the monitor was in NO_DATA state.
   */
  "lastNodataTs"?: number;
  /**
   * Latest timestamp of the notification sent for this monitor group.
   */
  "lastNotifiedTs"?: number;
  /**
   * Latest timestamp the monitor group was resolved.
   */
  "lastResolvedTs"?: number;
  /**
   * Latest timestamp the monitor group triggered.
   */
  "lastTriggeredTs"?: number;
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
      type: "any",
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
