import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentDiagnosticsV2DTOData } from "./ExperimentsExperimentDiagnosticsV2DTOData";

/**
 * Response containing the diagnostic checks for an experiment.
 */
export class ExperimentsExperimentDiagnosticsV2DTO {
  /**
   * Experiment diagnostics resource with its identifier and check results.
   */
  "data": ExperimentsExperimentDiagnosticsV2DTOData;
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
    data: {
      baseName: "data",
      type: "ExperimentsExperimentDiagnosticsV2DTOData",
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
    return ExperimentsExperimentDiagnosticsV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
