import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalAssigneeUpdateData } from "./SecurityMonitoringSignalAssigneeUpdateData";

/**
 * Request body for changing the assignee of a given security monitoring signal.
 */
export class SecurityMonitoringSignalAssigneeUpdateRequest {
  /**
   * Data containing the patch for changing the assignee of a signal.
   */
  "data": SecurityMonitoringSignalAssigneeUpdateData;
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
      type: "SecurityMonitoringSignalAssigneeUpdateData",
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
    return SecurityMonitoringSignalAssigneeUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
