/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditConfidenceIntervalV2 } from "./ExperimentsBanditConfidenceIntervalV2";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An arm's point estimate from one saved refresh.
 */
export class ExperimentsBanditPointEstimateV2 {
  /**
   * A central interval around point_estimate at confidence_level.
   */
  "confidenceInterval": ExperimentsBanditConfidenceIntervalV2;
  /**
   * The latest warehouse data the refresh read.
   */
  "dataAsOf": Date | null;
  /**
   * The arm's variant ID on the flag.
   */
  "featureFlagVariantId": string;
  /**
   * The arm's estimated mean of the metric, in the metric's units.
   */
  "pointEstimate": number;
  /**
   * The refresh the estimate comes from.
   */
  "refreshId": string;
  /**
   * When the refresh saved its results.
   */
  "resultsLastUpdated": Date;
  /**
   * The arm's variant key.
   */
  "variantKey": string | null;

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
    confidenceInterval: {
      baseName: "confidence_interval",
      type: "ExperimentsBanditConfidenceIntervalV2",
      required: true,
    },
    dataAsOf: {
      baseName: "data_as_of",
      type: "Date",
      required: true,
      format: "date-time",
    },
    featureFlagVariantId: {
      baseName: "feature_flag_variant_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    pointEstimate: {
      baseName: "point_estimate",
      type: "number",
      required: true,
      format: "double",
    },
    refreshId: {
      baseName: "refresh_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    resultsLastUpdated: {
      baseName: "results_last_updated",
      type: "Date",
      required: true,
      format: "date-time",
    },
    variantKey: {
      baseName: "variant_key",
      type: "string",
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
    return ExperimentsBanditPointEstimateV2.attributeTypeMap;
  }

  public constructor() {}
}
