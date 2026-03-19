import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationFeedbackResponseData } from "./SecurityMonitoringSignalInvestigationFeedbackResponseData";

/**
 * Response containing investigation feedback.
 */
export class SecurityMonitoringSignalInvestigationFeedbackResponse {
  /**
   * Data containing investigation feedback.
   */
  "data": SecurityMonitoringSignalInvestigationFeedbackResponseData;
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
      type: "SecurityMonitoringSignalInvestigationFeedbackResponseData",
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
    return SecurityMonitoringSignalInvestigationFeedbackResponse.attributeTypeMap;
  }

  public constructor() {}
}
