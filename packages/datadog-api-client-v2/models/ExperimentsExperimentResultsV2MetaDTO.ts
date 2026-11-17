/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsEVSIContext } from "./ExperimentsEVSIContext";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Selected experiment result run, its recorded EVSI forecast, and results freshness.
 */
export class ExperimentsExperimentResultsV2MetaDTO {
  /**
   * Forecast horizon and traffic counts used to calculate expected value of sample information (EVSI) for result_run_id. Assumes traffic continues at the rate observed during the lookback window. Omitted if the forecast was not recorded or could not be loaded.
   */
  "evsiContext"?: ExperimentsEVSIContext;
  /**
   * Whether the saved results require a refresh or their freshness cannot be confirmed. See stale_reasons for
   * details.
   */
  "isStale"?: boolean;
  /**
   * ID of the successful experiment run that produced these results.
   */
  "resultRunId": string;
  /**
   * Time when the experiment results were last updated.
   */
  "resultsLastUpdated"?: Date;
  /**
   * Reasons the saved experiment results are stale.
   */
  "staleReasons"?: Array<string>;

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
    evsiContext: {
      baseName: "evsi_context",
      type: "ExperimentsEVSIContext",
    },
    isStale: {
      baseName: "is_stale",
      type: "boolean",
    },
    resultRunId: {
      baseName: "result_run_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    resultsLastUpdated: {
      baseName: "results_last_updated",
      type: "Date",
      format: "date-time",
    },
    staleReasons: {
      baseName: "stale_reasons",
      type: "Array<string>",
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
    return ExperimentsExperimentResultsV2MetaDTO.attributeTypeMap;
  }

  public constructor() {}
}
