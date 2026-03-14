import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationFeedbackSection } from "./SecurityMonitoringSignalInvestigationFeedbackSection";

/**
 * Attributes of investigation feedback.
 */
export class SecurityMonitoringSignalInvestigationFeedbackResponseAttributes {
  /**
   * The feedback text.
   */
  "feedback": string;
  /**
   * Structured feedback content.
   */
  "feedbackContent"?: Array<SecurityMonitoringSignalInvestigationFeedbackSection>;
  /**
   * The unique ID of the investigation.
   */
  "investigationId": string;
  /**
   * The rating value.
   */
  "rating"?: string;
  /**
   * The unique ID of the security signal.
   */
  "signalId": string;
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
    feedback: {
      baseName: "feedback",
      type: "string",
      required: true,
    },
    feedbackContent: {
      baseName: "feedback_content",
      type: "Array<SecurityMonitoringSignalInvestigationFeedbackSection>",
    },
    investigationId: {
      baseName: "investigation_id",
      type: "string",
      required: true,
    },
    rating: {
      baseName: "rating",
      type: "string",
    },
    signalId: {
      baseName: "signal_id",
      type: "string",
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
    return SecurityMonitoringSignalInvestigationFeedbackResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
