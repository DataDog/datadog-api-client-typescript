import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationStepOutputVerdict } from "./SecurityMonitoringSignalInvestigationStepOutputVerdict";

/**
 * Output from an investigation step.
 */
export class SecurityMonitoringSignalInvestigationStepOutput {
  /**
   * A one-line summary of the step analysis.
   */
  "currentStepAnalysisOneliner"?: string;
  /**
   * A detailed summary of the step analysis.
   */
  "currentStepAnalysisSummary": string;
  /**
   * The name of the investigation step.
   */
  "name": string;
  /**
   * The verdict from the investigation step.
   */
  "verdict": SecurityMonitoringSignalInvestigationStepOutputVerdict;
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
    currentStepAnalysisOneliner: {
      baseName: "currentStepAnalysisOneliner",
      type: "string",
    },
    currentStepAnalysisSummary: {
      baseName: "currentStepAnalysisSummary",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    verdict: {
      baseName: "verdict",
      type: "SecurityMonitoringSignalInvestigationStepOutputVerdict",
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
    return SecurityMonitoringSignalInvestigationStepOutput.attributeTypeMap;
  }

  public constructor() {}
}
