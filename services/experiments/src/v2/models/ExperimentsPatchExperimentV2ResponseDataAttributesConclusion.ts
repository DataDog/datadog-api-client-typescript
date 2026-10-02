import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentV2DTODataAttributesConclusionOutcome } from "./ExperimentsExperimentV2DTODataAttributesConclusionOutcome";

/**
 * Outcome and supporting text recorded when the experiment is concluded.
 */
export class ExperimentsPatchExperimentV2ResponseDataAttributesConclusion {
  /**
   * Reason for the recorded decision.
   */
  "decisionReason"?: string;
  /**
   * Recorded experiment outcome.
   */
  "outcome"?: ExperimentsExperimentV2DTODataAttributesConclusionOutcome;
  /**
   * Summary of the experiment conclusion.
   */
  "summary"?: string;
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
    decisionReason: {
      baseName: "decision_reason",
      type: "string",
    },
    outcome: {
      baseName: "outcome",
      type: "ExperimentsExperimentV2DTODataAttributesConclusionOutcome",
    },
    summary: {
      baseName: "summary",
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
    return ExperimentsPatchExperimentV2ResponseDataAttributesConclusion.attributeTypeMap;
  }

  public constructor() {}
}
