import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonS3DestinationCompressionGzipType } from "./ObservabilityPipelineAmazonS3DestinationCompressionGzipType";

/**
 * Gzip compression.
 */
export class ObservabilityPipelineAmazonS3DestinationCompressionGzip {
  /**
   * The compression type. Always `gzip`.
   */
  "algorithm": ObservabilityPipelineAmazonS3DestinationCompressionGzipType;
  /**
   * Gzip compression level. Valid values range from `1` to `9`.
   */
  "level": number;
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
      type: "ObservabilityPipelineAmazonS3DestinationCompressionGzipType",
      required: true,
    },
    level: {
      baseName: "level",
      type: "number",
      required: true,
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
    return ObservabilityPipelineAmazonS3DestinationCompressionGzip.attributeTypeMap;
  }

  public constructor() {}
}
