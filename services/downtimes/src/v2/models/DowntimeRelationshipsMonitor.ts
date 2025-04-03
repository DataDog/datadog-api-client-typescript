import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeRelationshipsMonitorData } from "./DowntimeRelationshipsMonitorData";

/**
 * The monitor identified by the downtime.
 */
export class DowntimeRelationshipsMonitor {
  /**
   * Data for the monitor.
   */
  "data"?: DowntimeRelationshipsMonitorData;
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
    data: {
      baseName: "data",
      type: "DowntimeRelationshipsMonitorData",
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
    return DowntimeRelationshipsMonitor.attributeTypeMap;
  }

  public constructor() {}
}
