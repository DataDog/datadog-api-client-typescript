import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringTriageUser } from "./SecurityMonitoringTriageUser";

/**
 * Attributes describing the new assignee of a security signal.
 */
export class SecurityMonitoringSignalAssigneeUpdateAttributes {
  /**
   * Object representing a given user entity.
   */
  "assignee": SecurityMonitoringTriageUser;
  /**
   * Version of the updated signal. If server side version is higher, update will be rejected.
   */
  "version"?: number;
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
    assignee: {
      baseName: "assignee",
      type: "SecurityMonitoringTriageUser",
      required: true,
    },
    version: {
      baseName: "version",
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
    return SecurityMonitoringSignalAssigneeUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
