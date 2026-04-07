import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineElasticsearchDestinationCompressionAlgorithm } from "./ObservabilityPipelineElasticsearchDestinationCompressionAlgorithm";

/**
 * Compression configuration for the Elasticsearch destination.
 */
export class ObservabilityPipelineElasticsearchDestinationCompression {
  /**
   * The compression algorithm applied when sending data to Elasticsearch.
   */
  "algorithm": ObservabilityPipelineElasticsearchDestinationCompressionAlgorithm;
  /**
   * The compression level. Only applicable for `gzip`, `zlib`, and `zstd` algorithms.
   */
  "level"?: number;
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
    algorithm: {
      baseName: "algorithm",
      type: "ObservabilityPipelineElasticsearchDestinationCompressionAlgorithm",
      required: true,
    },
    level: {
      baseName: "level",
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
    return ObservabilityPipelineElasticsearchDestinationCompression.attributeTypeMap;
  }

  public constructor() {}
}
