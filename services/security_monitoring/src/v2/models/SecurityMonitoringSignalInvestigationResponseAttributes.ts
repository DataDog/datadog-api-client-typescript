import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalInvestigationState } from "./SecurityMonitoringSignalInvestigationState";
import { SecurityMonitoringSignalInvestigationStep } from "./SecurityMonitoringSignalInvestigationStep";

/**
 * Attributes of a signal investigation response.
 */
export class SecurityMonitoringSignalInvestigationResponseAttributes {
  /**
   * The unique ID of the investigation.
   */
  "investigationId": string;
  /**
   * The ID of the rule that triggered the signal.
   */
  "ruleId": string;
  /**
   * The unique ID of the security signal.
   */
  "signalId": string;
  /**
   * The state of the investigation.
   */
  "state"?: SecurityMonitoringSignalInvestigationState;
  /**
   * Information about an investigation step.
   */
  "step"?: SecurityMonitoringSignalInvestigationStep;
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
    investigationId: {
      baseName: "investigation_id",
      type: "string",
      required: true,
    },
    ruleId: {
      baseName: "rule_id",
      type: "string",
      required: true,
    },
    signalId: {
      baseName: "signal_id",
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "SecurityMonitoringSignalInvestigationState",
    },
    step: {
      baseName: "step",
      type: "SecurityMonitoringSignalInvestigationStep",
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
    return SecurityMonitoringSignalInvestigationResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
