import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationResponseAttributes } from "./SecurityMonitoringSignalInvestigationResponseAttributes";
import { SecurityMonitoringSignalInvestigationType } from "./SecurityMonitoringSignalInvestigationType";

/**
 * Data containing the investigation details.
 */
export class SecurityMonitoringSignalInvestigationResponseData {
  /**
   * Attributes of a signal investigation response.
   */
  "attributes": SecurityMonitoringSignalInvestigationResponseAttributes;
  /**
   * The unique ID of the investigation.
   */
  "id": string;
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
      type: "SecurityMonitoringSignalInvestigationResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return SecurityMonitoringSignalInvestigationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
