import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonS3GenericCompressionSnappyType } from "./ObservabilityPipelineAmazonS3GenericCompressionSnappyType";

/**
 * Snappy compression.
 */
export class ObservabilityPipelineAmazonS3GenericCompressionSnappy {
  /**
   * The compression type. Always `snappy`.
   */
  "algorithm": ObservabilityPipelineAmazonS3GenericCompressionSnappyType;
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
      type: "ObservabilityPipelineAmazonS3GenericCompressionSnappyType",
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
    return ObservabilityPipelineAmazonS3GenericCompressionSnappy.attributeTypeMap;
  }

  public constructor() {}
}
