import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetDataResponse } from "./LLMObsDatasetDataResponse";
import { LLMObsDatasetRecordDataResponse } from "./LLMObsDatasetRecordDataResponse";
import { LLMObsExperimentDataAttributesResponse } from "./LLMObsExperimentDataAttributesResponse";
import { LLMObsExperimentRunDataResponse } from "./LLMObsExperimentRunDataResponse";
import { LLMObsProjectDataResponse } from "./LLMObsProjectDataResponse";

/**
 * The matching experimentation entities grouped by type.
 */
export class LLMObsExperimentationSearchResults {
  /**
   * Matching dataset records. Present when `dataset_records` is included in `filter.scope`.
   */
  "datasetRecords"?: Array<LLMObsDatasetRecordDataResponse>;
  /**
   * Matching datasets. Present when `datasets` is included in `filter.scope`.
   */
  "datasets"?: Array<LLMObsDatasetDataResponse>;
  /**
   * Matching experiment runs. Present when `experiment_runs` is included in `filter.scope`.
   */
  "experimentRuns"?: Array<LLMObsExperimentRunDataResponse>;
  /**
   * Matching experiments. Present when `experiments` is included in `filter.scope`.
   */
  "experiments"?: Array<LLMObsExperimentDataAttributesResponse>;
  /**
   * Matching projects. Present when `projects` is included in `filter.scope`.
   */
  "projects"?: Array<LLMObsProjectDataResponse>;
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
    datasetRecords: {
      baseName: "dataset_records",
      type: "Array<LLMObsDatasetRecordDataResponse>",
    },
    datasets: {
      baseName: "datasets",
      type: "Array<LLMObsDatasetDataResponse>",
    },
    experimentRuns: {
      baseName: "experiment_runs",
      type: "Array<LLMObsExperimentRunDataResponse>",
    },
    experiments: {
      baseName: "experiments",
      type: "Array<LLMObsExperimentDataAttributesResponse>",
    },
    projects: {
      baseName: "projects",
      type: "Array<LLMObsProjectDataResponse>",
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
    return LLMObsExperimentationSearchResults.attributeTypeMap;
  }

  public constructor() {}
}
