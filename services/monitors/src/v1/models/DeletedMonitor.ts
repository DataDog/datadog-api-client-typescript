import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response from the delete monitor call.
 */
export class DeletedMonitor {
  /**
   * ID of the deleted monitor.
   */
  "deletedMonitorId"?: number;
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
    deletedMonitorId: {
      baseName: "deleted_monitor_id",
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
    return DeletedMonitor.attributeTypeMap;
  }

  public constructor() {}
}
