import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineHttpClientDestinationCompressionAlgorithm } from "./ObservabilityPipelineHttpClientDestinationCompressionAlgorithm";

/**
 * Compression configuration for HTTP requests.
 */
export class ObservabilityPipelineHttpClientDestinationCompression {
  /**
   * Compression algorithm.
   */
  "algorithm": ObservabilityPipelineHttpClientDestinationCompressionAlgorithm;
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
      type: "ObservabilityPipelineHttpClientDestinationCompressionAlgorithm",
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
    return ObservabilityPipelineHttpClientDestinationCompression.attributeTypeMap;
  }

  public constructor() {}
}
