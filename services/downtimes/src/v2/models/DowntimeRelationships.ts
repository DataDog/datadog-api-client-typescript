import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeRelationshipsCreatedBy } from "./DowntimeRelationshipsCreatedBy";
import { DowntimeRelationshipsMonitor } from "./DowntimeRelationshipsMonitor";

/**
 * All relationships associated with downtime.
 */
export class DowntimeRelationships {
  /**
   * The user who created the downtime.
   */
  "createdBy"?: DowntimeRelationshipsCreatedBy;
  /**
   * The monitor identified by the downtime.
   */
  "monitor"?: DowntimeRelationshipsMonitor;
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
    createdBy: {
      baseName: "created_by",
      type: "DowntimeRelationshipsCreatedBy",
    },
    monitor: {
      baseName: "monitor",
      type: "DowntimeRelationshipsMonitor",
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
    return DowntimeRelationships.attributeTypeMap;
  }

  public constructor() {}
}
