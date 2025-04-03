import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalTriageUpdateData } from "./SecurityMonitoringSignalTriageUpdateData";

/**
 * The response returned after all triage operations, containing the updated signal triage data.
 */
export class SecurityMonitoringSignalTriageUpdateResponse {
  /**
   * Data containing the updated triage attributes of the signal.
   */
  "data": SecurityMonitoringSignalTriageUpdateData;
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
      type: "SecurityMonitoringSignalTriageUpdateData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalTriageUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
