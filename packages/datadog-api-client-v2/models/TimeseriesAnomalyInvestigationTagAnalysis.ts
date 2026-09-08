/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationTagAnalysisStatus } from "./TimeseriesAnomalyInvestigationTagAnalysisStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Summary of optional influential-tag enrichment. Count and key fields are present only when analysis completes; enrichment availability does not affect completion of the investigation result.
 */
export class TimeseriesAnomalyInvestigationTagAnalysis {
  /**
   * Tag keys analyzed. Present only when analysis completes.
   */
  "analyzedTagKeys"?: Array<string>;
  /**
   * Outcome of optional influential-tag enrichment.
   */
  "status": TimeseriesAnomalyInvestigationTagAnalysisStatus;
  /**
   * Number of tag keys analyzed. Present only when analysis completes.
   */
  "tagKeysAnalyzed"?: number;
  /**
   * Number of tag values analyzed. Present only when analysis completes.
   */
  "tagValuesAnalyzed"?: number;

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
    analyzedTagKeys: {
      baseName: "analyzed_tag_keys",
      type: "Array<string>",
    },
    status: {
      baseName: "status",
      type: "TimeseriesAnomalyInvestigationTagAnalysisStatus",
      required: true,
    },
    tagKeysAnalyzed: {
      baseName: "tag_keys_analyzed",
      type: "number",
      format: "int64",
    },
    tagValuesAnalyzed: {
      baseName: "tag_values_analyzed",
      type: "number",
      format: "int64",
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
    return TimeseriesAnomalyInvestigationTagAnalysis.attributeTypeMap;
  }

  public constructor() {}
}
