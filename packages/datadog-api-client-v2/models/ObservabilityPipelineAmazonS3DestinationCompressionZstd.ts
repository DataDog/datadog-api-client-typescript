/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3DestinationCompressionZstdType } from "./ObservabilityPipelineAmazonS3DestinationCompressionZstdType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Zstd compression.
 */
export class ObservabilityPipelineAmazonS3DestinationCompressionZstd {
  /**
   * The compression type. Always `zstd`.
   */
  "algorithm": ObservabilityPipelineAmazonS3DestinationCompressionZstdType;
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
      type: "ObservabilityPipelineAmazonS3DestinationCompressionZstdType",
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
    return ObservabilityPipelineAmazonS3DestinationCompressionZstd.attributeTypeMap;
  }

  public constructor() {}
}
