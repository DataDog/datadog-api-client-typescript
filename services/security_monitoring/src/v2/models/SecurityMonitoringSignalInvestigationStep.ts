import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationStepOutput } from "./SecurityMonitoringSignalInvestigationStepOutput";

/**
 * Information about an investigation step.
 */
export class SecurityMonitoringSignalInvestigationStep {
  /**
   * Array of step outputs.
   */
  "stepOutputs": Array<SecurityMonitoringSignalInvestigationStepOutput>;
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
    stepOutputs: {
      baseName: "stepOutputs",
      type: "Array<SecurityMonitoringSignalInvestigationStepOutput>",
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
    return SecurityMonitoringSignalInvestigationStep.attributeTypeMap;
  }

  public constructor() {}
}
