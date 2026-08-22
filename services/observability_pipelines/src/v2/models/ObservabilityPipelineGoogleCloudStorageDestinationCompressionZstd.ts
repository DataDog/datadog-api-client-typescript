import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstdType } from "./ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstdType";

/**
 * Zstd compression.
 */
export class ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstd {
  /**
   * The compression type. Always `zstd`.
   */
  "algorithm": ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstdType;
  /**
   * Zstd compression level. Valid values range from 1 to 21.
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
      type: "ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstdType",
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
    return ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstd.attributeTypeMap;
  }

  public constructor() {}
}
