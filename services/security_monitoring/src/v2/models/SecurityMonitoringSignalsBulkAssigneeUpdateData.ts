import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalsBulkAssigneeUpdateAttributes } from "./SecurityMonitoringSignalsBulkAssigneeUpdateAttributes";
import { SecurityMonitoringSignalType } from "./SecurityMonitoringSignalType";

/**
 * Data for updating the assignees for multiple security signals.
 */
export class SecurityMonitoringSignalsBulkAssigneeUpdateData {
  /**
   * Attributes describing the new assignees for a bulk signal update.
   */
  "attributes": SecurityMonitoringSignalsBulkAssigneeUpdateAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id": string;
  /**
   * The type of event.
   */
  "type"?: SecurityMonitoringSignalType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringSignalsBulkAssigneeUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalType",
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
    return SecurityMonitoringSignalsBulkAssigneeUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
