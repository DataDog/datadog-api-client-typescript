import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalIncidentsUpdateAttributes } from "./SecurityMonitoringSignalIncidentsUpdateAttributes";

/**
 * Data containing the patch for changing the related incidents of a signal.
 */
export class SecurityMonitoringSignalIncidentsUpdateData {
  /**
   * Attributes describing the new list of related signals for a security signal.
   */
  "attributes": SecurityMonitoringSignalIncidentsUpdateAttributes;
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
      type: "SecurityMonitoringSignalIncidentsUpdateAttributes",
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
    return SecurityMonitoringSignalIncidentsUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
