import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationFeedbackResponseAttributes } from "./SecurityMonitoringSignalInvestigationFeedbackResponseAttributes";
import { SecurityMonitoringSignalInvestigationFeedbackType } from "./SecurityMonitoringSignalInvestigationFeedbackType";

/**
 * Data containing investigation feedback.
 */
export class SecurityMonitoringSignalInvestigationFeedbackResponseData {
  /**
   * Attributes of investigation feedback.
   */
  "attributes": SecurityMonitoringSignalInvestigationFeedbackResponseAttributes;
  /**
   * The unique ID of the investigation.
   */
  "id": string;
  /**
   * The type of feedback.
   */
  "type": SecurityMonitoringSignalInvestigationFeedbackType;
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
      type: "SecurityMonitoringSignalInvestigationFeedbackResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalInvestigationFeedbackType",
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
    return SecurityMonitoringSignalInvestigationFeedbackResponseData.attributeTypeMap;
  }

  public constructor() {}
}
