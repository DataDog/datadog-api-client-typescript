import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompressionAlgorithm } from "./ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompressionAlgorithm";

/**
 * Compression configuration for log events.
 */
export class ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression {
  /**
   * Compression algorithm for log events.
   */
  "algorithm": ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompressionAlgorithm;
  /**
   * Compression level.
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
      type: "ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompressionAlgorithm",
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
    return ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression.attributeTypeMap;
  }

  public constructor() {}
}
