/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3GenericCompressionSnappyType } from "./ObservabilityPipelineAmazonS3GenericCompressionSnappyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
