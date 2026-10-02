/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItemsOutcome } from "./ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItemsOutcome";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Refresh outcome for one experiment.
 */
export class ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems {
  /**
   * ID of the experiment associated with this result.
   */
  "experimentId"?: string;
  /**
   * Outcome of attempting to refresh one experiment.
   */
  "outcome"?: ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItemsOutcome;

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
    experimentId: {
      baseName: "experiment_id",
      type: "string",
    },
    outcome: {
      baseName: "outcome",
      type: "ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItemsOutcome",
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
    return ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems.attributeTypeMap;
  }

  public constructor() {}
}
