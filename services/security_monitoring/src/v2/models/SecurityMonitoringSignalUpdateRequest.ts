import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalUpdateData } from "./SecurityMonitoringSignalUpdateData";

/**
 * Request body for updating the triage state or assignee of a security signal.
 */
export class SecurityMonitoringSignalUpdateRequest {
  /**
   * Data containing the triage state or assignee update for a security signal.
   */
  "data": SecurityMonitoringSignalUpdateData;
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
      type: "SecurityMonitoringSignalUpdateData",
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
    return SecurityMonitoringSignalUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
