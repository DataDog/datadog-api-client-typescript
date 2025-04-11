import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalAssigneeUpdateAttributes } from "./SecurityMonitoringSignalAssigneeUpdateAttributes";

/**
 * Data containing the patch for changing the assignee of a signal.
 */
export class SecurityMonitoringSignalAssigneeUpdateData {
  /**
   * Attributes describing the new assignee of a security signal.
   */
  "attributes": SecurityMonitoringSignalAssigneeUpdateAttributes;
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
      type: "SecurityMonitoringSignalAssigneeUpdateAttributes",
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
    return SecurityMonitoringSignalAssigneeUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
