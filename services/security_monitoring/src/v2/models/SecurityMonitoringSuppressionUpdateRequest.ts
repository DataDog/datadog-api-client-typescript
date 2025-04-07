import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSuppressionUpdateData } from "./SecurityMonitoringSuppressionUpdateData";

/**
 * Request object containing the fields to update on the suppression rule.
 */
export class SecurityMonitoringSuppressionUpdateRequest {
  /**
   * The new suppression properties; partial updates are supported.
   */
  "data": SecurityMonitoringSuppressionUpdateData;
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
      type: "SecurityMonitoringSuppressionUpdateData",
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
    return SecurityMonitoringSuppressionUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
