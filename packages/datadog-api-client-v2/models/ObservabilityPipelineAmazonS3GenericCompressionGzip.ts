/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3GenericCompressionGzipType } from "./ObservabilityPipelineAmazonS3GenericCompressionGzipType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Gzip compression.
 */
export class ObservabilityPipelineAmazonS3GenericCompressionGzip {
  /**
   * Gzip compression level.
   */
  "level": number;
  /**
   * The compression type. Always `gzip`.
   */
  "type": ObservabilityPipelineAmazonS3GenericCompressionGzipType;

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
      type: "ObservabilityPipelineAmazonS3GenericCompressionGzipType",
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
    return ObservabilityPipelineAmazonS3GenericCompressionGzip.attributeTypeMap;
  }

  public constructor() {}
}
