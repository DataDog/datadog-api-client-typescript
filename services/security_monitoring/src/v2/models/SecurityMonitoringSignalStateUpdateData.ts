import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalMetadataType } from "./SecurityMonitoringSignalMetadataType";
import { SecurityMonitoringSignalStateUpdateAttributes } from "./SecurityMonitoringSignalStateUpdateAttributes";

/**
 * Data containing the patch for changing the state of a signal.
 */
export class SecurityMonitoringSignalStateUpdateData {
  /**
   * Attributes describing the change of state of a security signal.
   */
  "attributes": SecurityMonitoringSignalStateUpdateAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id"?: any;
  /**
   * The type of event.
   */
  "type"?: SecurityMonitoringSignalMetadataType;
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
      type: "SecurityMonitoringSignalStateUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "any",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalMetadataType",
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
    return SecurityMonitoringSignalStateUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
