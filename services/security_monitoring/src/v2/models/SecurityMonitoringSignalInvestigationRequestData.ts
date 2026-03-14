import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationRequestAttributes } from "./SecurityMonitoringSignalInvestigationRequestAttributes";
import { SecurityMonitoringSignalInvestigationType } from "./SecurityMonitoringSignalInvestigationType";

/**
 * Data for creating a signal investigation.
 */
export class SecurityMonitoringSignalInvestigationRequestData {
  /**
   * Attributes for creating a signal investigation.
   */
  "attributes": SecurityMonitoringSignalInvestigationRequestAttributes;
  /**
   * The type of investigation signal.
   */
  "type": SecurityMonitoringSignalInvestigationType;
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
      type: "SecurityMonitoringSignalInvestigationRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalInvestigationType",
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
    return SecurityMonitoringSignalInvestigationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
