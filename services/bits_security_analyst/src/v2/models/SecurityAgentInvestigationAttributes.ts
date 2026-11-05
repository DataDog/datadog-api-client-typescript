import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationKeyEntities } from "./SecurityAgentInvestigationKeyEntities";
import { SecurityAgentInvestigationKeyEvidence } from "./SecurityAgentInvestigationKeyEvidence";
import { SecurityAgentInvestigationResponseSuggestions } from "./SecurityAgentInvestigationResponseSuggestions";
import { SecurityAgentInvestigationSignal } from "./SecurityAgentInvestigationSignal";
import { SecurityAgentInvestigationState } from "./SecurityAgentInvestigationState";
import { SecurityAgentInvestigationStep } from "./SecurityAgentInvestigationStep";
import { SecurityAgentInvestigationVerdict } from "./SecurityAgentInvestigationVerdict";

/**
 * Attributes of an investigation. When `fields[investigations]` is set, only listed attributes are returned.
 * Attributes the investigation doesn't have yet are absent.
 */
export class SecurityAgentInvestigationAttributes {
  /**
   * Summary of the investigation's findings.
   */
  "conclusion"?: string;
  /**
   * When the investigation started.
   */
  "createdAt"?: Date;
  /**
   * The entities the investigation found, by role.
   */
  "keyEntities"?: SecurityAgentInvestigationKeyEntities;
  /**
   * The evidence the verdict rests on.
   */
  "keyEvidence"?: Array<SecurityAgentInvestigationKeyEvidence>;
  /**
   * Suggested responses to the signal.
   */
  "responseSuggestions"?: SecurityAgentInvestigationResponseSuggestions;
  /**
   * ID of the detection rule that generated the signal.
   */
  "ruleId"?: string;
  /**
   * Summary of the signal the investigation is about.
   */
  "signal"?: SecurityAgentInvestigationSignal;
  /**
   * ID of the signal, in its V1 form.
   */
  "signalId"?: string;
  /**
   * State of the investigation: `investigating` while it runs, `completed` after it has a result, or `failed`
   * when it produced no result before its timeout.
   */
  "state"?: SecurityAgentInvestigationState;
  /**
   * The steps of the investigation, in order.
   */
  "steps"?: Array<SecurityAgentInvestigationStep>;
  /**
   * When the investigation last changed.
   */
  "updatedAt"?: Date;
  /**
   * Verdict of the investigation. Only completed investigations have one.
   */
  "verdict"?: SecurityAgentInvestigationVerdict;
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
    conclusion: {
      baseName: "conclusion",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    keyEntities: {
      baseName: "key_entities",
      type: "SecurityAgentInvestigationKeyEntities",
    },
    keyEvidence: {
      baseName: "key_evidence",
      type: "Array<SecurityAgentInvestigationKeyEvidence>",
    },
    responseSuggestions: {
      baseName: "response_suggestions",
      type: "SecurityAgentInvestigationResponseSuggestions",
    },
    ruleId: {
      baseName: "rule_id",
      type: "string",
    },
    signal: {
      baseName: "signal",
      type: "SecurityAgentInvestigationSignal",
    },
    signalId: {
      baseName: "signal_id",
      type: "string",
    },
    state: {
      baseName: "state",
      type: "SecurityAgentInvestigationState",
    },
    steps: {
      baseName: "steps",
      type: "Array<SecurityAgentInvestigationStep>",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    verdict: {
      baseName: "verdict",
      type: "SecurityAgentInvestigationVerdict",
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
    return SecurityAgentInvestigationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
