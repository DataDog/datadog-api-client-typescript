import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SampledAnalysisQuerySample } from "./SampledAnalysisQuerySample";
import { SampledAnalysisQueryType } from "./SampledAnalysisQueryType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SampledAnalysisQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sample": SampledAnalysisQuerySample;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sourceDataset": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": SampledAnalysisQueryType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    queryFilter: {
      baseName: "query_filter",
      type: "string",
    },
    sample: {
      baseName: "sample",
      type: "SampledAnalysisQuerySample",
      required: true,
    },
    sourceDataset: {
      baseName: "source_dataset",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SampledAnalysisQueryType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SampledAnalysisQuery.attributeTypeMap;
  }

  public constructor() {}
}
