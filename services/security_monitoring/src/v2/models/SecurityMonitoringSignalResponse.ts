import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignal } from "./SecurityMonitoringSignal";

/**
 * Security Signal response data object.
 */
export class SecurityMonitoringSignalResponse {
  /**
   * Object description of a security signal.
   */
  "data"?: SecurityMonitoringSignal;
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
      type: "SecurityMonitoringSignal",
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
    return SecurityMonitoringSignalResponse.attributeTypeMap;
  }

  public constructor() {}
}
