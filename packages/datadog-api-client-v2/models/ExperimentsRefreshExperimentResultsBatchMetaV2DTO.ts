/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems } from "./ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
