import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems } from "./ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems";

/**
 * Summary of refresh outcomes across the organization's experiments.
 */
export class ExperimentsRefreshExperimentResultsBatchMetaV2DTO {
  /**
   * Number of experiments updated by the refresh request.
   */
  "experimentsUpdated"?: number;
  /**
   * Refresh outcome reported for each experiment.
   */
  "results"?: Array<ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems | null>;
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
    experimentsUpdated: {
      baseName: "experiments_updated",
      type: "number",
      format: "int64",
    },
    results: {
      baseName: "results",
      type: "Array<ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems>",
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
    return ExperimentsRefreshExperimentResultsBatchMetaV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
