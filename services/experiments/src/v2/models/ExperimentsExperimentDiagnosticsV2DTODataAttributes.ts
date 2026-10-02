import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems";
import { ExperimentsExperimentDiagnosticsV2DTODataAttributesResult } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributesResult";
import { ExperimentsExperimentDiagnosticsV2DTODataAttributesState } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributesState";

/**
 * Diagnostic check results and their evaluation state.
 */
export class ExperimentsExperimentDiagnosticsV2DTODataAttributes {
  /**
   * Results of individual diagnostic checks.
   */
  "diagnostics": Array<ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems>;
  /**
   * Time when the diagnostic checks were evaluated.
   */
  "evaluatedAt"?: Date;
  /**
   * Overall result of the experiment diagnostic checks.
   */
  "result"?: ExperimentsExperimentDiagnosticsV2DTODataAttributesResult;
  /**
   * Current state of the diagnostic evaluation.
   */
  "state": ExperimentsExperimentDiagnosticsV2DTODataAttributesState;
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
    diagnostics: {
      baseName: "diagnostics",
      type: "Array<ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems>",
      required: true,
    },
    evaluatedAt: {
      baseName: "evaluated_at",
      type: "Date",
      format: "date-time",
    },
    result: {
      baseName: "result",
      type: "ExperimentsExperimentDiagnosticsV2DTODataAttributesResult",
    },
    state: {
      baseName: "state",
      type: "ExperimentsExperimentDiagnosticsV2DTODataAttributesState",
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
    return ExperimentsExperimentDiagnosticsV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
