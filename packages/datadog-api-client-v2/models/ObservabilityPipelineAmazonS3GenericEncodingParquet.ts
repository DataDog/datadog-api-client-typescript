/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3GenericEncodingParquetType } from "./ObservabilityPipelineAmazonS3GenericEncodingParquetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parquet encoding.
 */
export class ObservabilityPipelineAmazonS3GenericEncodingParquet {
  /**
   * The encoding type. Always `parquet`.
   */
  "type": ObservabilityPipelineAmazonS3GenericEncodingParquetType;

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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAmazonS3GenericEncodingParquetType",
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
    return ObservabilityPipelineAmazonS3GenericEncodingParquet.attributeTypeMap;
  }

  public constructor() {}
}
