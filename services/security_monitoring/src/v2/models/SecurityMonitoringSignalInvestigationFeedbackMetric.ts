import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A feedback metric containing user response.
 */
export class SecurityMonitoringSignalInvestigationFeedbackMetric {
  /**
   * Placeholder text for the metric.
   */
  "placeholder"?: string;
  /**
   * The question or prompt.
   */
  "prompt": string;
  /**
   * The user's response.
   */
  "response": string;
  /**
   * The type of metric.
   */
  "type": string;
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
    placeholder: {
      baseName: "placeholder",
      type: "string",
    },
    prompt: {
      baseName: "prompt",
      type: "string",
      required: true,
    },
    response: {
      baseName: "response",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
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
    return SecurityMonitoringSignalInvestigationFeedbackMetric.attributeTypeMap;
  }

  public constructor() {}
}
