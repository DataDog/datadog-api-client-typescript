import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalsBulkAssigneeUpdateData } from "./SecurityMonitoringSignalsBulkAssigneeUpdateData";

/**
 * Request body for updating the assignee of multiple security signals.
 */
export class SecurityMonitoringSignalsBulkAssigneeUpdateRequest {
  /**
   * An array of signal assignee updates.
   */
  "data": Array<SecurityMonitoringSignalsBulkAssigneeUpdateData>;
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
      type: "Array<SecurityMonitoringSignalsBulkAssigneeUpdateData>",
      required: true,
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
    return SecurityMonitoringSignalsBulkAssigneeUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
