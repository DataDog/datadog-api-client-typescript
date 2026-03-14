import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonS3GenericCompressionZstdType } from "./ObservabilityPipelineAmazonS3GenericCompressionZstdType";

/**
 * Zstd compression.
 */
export class ObservabilityPipelineAmazonS3GenericCompressionZstd {
  /**
   * Zstd compression level.
   */
  "level": number;
  /**
   * The compression type. Always `zstd`.
   */
  "type": ObservabilityPipelineAmazonS3GenericCompressionZstdType;
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
    level: {
      baseName: "level",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAmazonS3GenericCompressionZstdType",
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
    return ObservabilityPipelineAmazonS3GenericCompressionZstd.attributeTypeMap;
  }

  public constructor() {}
}
