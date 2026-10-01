import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineEnrichmentTableFileEncoding } from "./ObservabilityPipelineEnrichmentTableFileEncoding";
import { ObservabilityPipelineMetricEnrichmentTableFileKey } from "./ObservabilityPipelineMetricEnrichmentTableFileKey";

/**
 * Defines a static enrichment table loaded from a CSV file for metric enrichment.
 */
export class ObservabilityPipelineMetricEnrichmentTableFile {
  /**
   * File encoding format.
   */
  "encoding": ObservabilityPipelineEnrichmentTableFileEncoding;
  /**
   * Defines how to map a metric lookup value to a CSV column during enrichment table lookups.
   */
  "key": ObservabilityPipelineMetricEnrichmentTableFileKey;
  /**
   * Path to the CSV file.
   */
  "path": string;
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
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineEnrichmentTableFileEncoding",
      required: true,
    },
    key: {
      baseName: "key",
      type: "ObservabilityPipelineMetricEnrichmentTableFileKey",
      required: true,
    },
    path: {
      baseName: "path",
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
    return ObservabilityPipelineMetricEnrichmentTableFile.attributeTypeMap;
  }

  public constructor() {}
}
