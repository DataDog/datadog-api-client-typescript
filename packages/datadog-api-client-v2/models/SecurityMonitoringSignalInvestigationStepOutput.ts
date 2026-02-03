/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalInvestigationStepOutputVerdict } from "./SecurityMonitoringSignalInvestigationStepOutputVerdict";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
