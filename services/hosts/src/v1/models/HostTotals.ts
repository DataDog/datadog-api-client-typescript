import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
