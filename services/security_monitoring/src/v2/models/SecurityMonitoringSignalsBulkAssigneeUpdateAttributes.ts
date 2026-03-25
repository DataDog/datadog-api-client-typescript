import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes describing the new assignees for a bulk signal update.
 */
export class SecurityMonitoringSignalsBulkAssigneeUpdateAttributes {
  /**
   * UUID of the user to assign to the signal. Use an empty string to unassign.
   */
  "assignee": string;
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
      type: "string",
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
    return SecurityMonitoringSignalsBulkAssigneeUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
