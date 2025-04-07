import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeIncludedMonitorType } from "./DowntimeIncludedMonitorType";

/**
 * Data for the monitor.
 */
export class DowntimeRelationshipsMonitorData {
  /**
   * Monitor ID of the downtime.
   */
  "id"?: string;
  /**
   * Monitor resource type.
   */
  "type"?: DowntimeIncludedMonitorType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DowntimeIncludedMonitorType",
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
    return DowntimeRelationshipsMonitorData.attributeTypeMap;
  }

  public constructor() {}
}
