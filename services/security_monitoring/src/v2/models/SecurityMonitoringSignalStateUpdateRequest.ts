import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalStateUpdateData } from "./SecurityMonitoringSignalStateUpdateData";

/**
 * Request body for changing the state of a given security monitoring signal.
 */
export class SecurityMonitoringSignalStateUpdateRequest {
  /**
   * Data containing the patch for changing the state of a signal.
   */
  "data": SecurityMonitoringSignalStateUpdateData;
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
      type: "SecurityMonitoringSignalStateUpdateData",
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
    return SecurityMonitoringSignalStateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
