import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationFeedbackSection } from "./SecurityMonitoringSignalInvestigationFeedbackSection";

/**
 * Attributes for investigation feedback.
 */
export class SecurityMonitoringSignalInvestigationFeedbackRequestAttributes {
  /**
   * The feedback text.
   */
  "feedback": string;
  /**
   * Structured feedback content.
   */
  "feedbackContent"?: Array<SecurityMonitoringSignalInvestigationFeedbackSection>;
  /**
   * Whether the feedback is incomplete.
   */
  "incomplete"?: boolean;
  /**
   * The rating value.
   */
  "rating"?: string;
  /**
   * The unique ID of the security signal.
   */
  "signalId": string;
  /**
   * The type of feedback.
   */
  "type"?: string;
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
    incomplete: {
      baseName: "incomplete",
      type: "boolean",
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
    type: {
      baseName: "type",
      type: "string",
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
    return SecurityMonitoringSignalInvestigationFeedbackRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
