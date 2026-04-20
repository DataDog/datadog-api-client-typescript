import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalMetadataType } from "./SecurityMonitoringSignalMetadataType";
import { SecurityMonitoringSignalUpdateAttributes } from "./SecurityMonitoringSignalUpdateAttributes";

/**
 * Data containing the triage state or assignee update for a security signal.
 */
export class SecurityMonitoringSignalUpdateData {
  /**
   * Attributes for updating the triage state or assignee of a security signal.
   */
  "attributes": SecurityMonitoringSignalUpdateAttributes;
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
      type: "SecurityMonitoringSignalUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalMetadataType",
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
    return SecurityMonitoringSignalUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
