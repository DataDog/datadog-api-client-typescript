/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineClickhouseDestinationBatchEncodingCodec } from "./ObservabilityPipelineClickhouseDestinationBatchEncodingCodec";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Batch encoding configuration for the ClickHouse destination.
 * Required when `format` is `arrow_stream`. The `codec` field must be set to `arrow_stream`.
 */
export class ObservabilityPipelineClickhouseDestinationBatchEncoding {
  /**
   * When `true`, null values are allowed for non-nullable fields in the ClickHouse schema.
   * When `false` (default), missing values for non-nullable columns cause encoding errors.
   */
  "allowNullableFields"?: boolean;
  /**
   * The codec used for batch encoding. Only `arrow_stream` is supported.
   */
  "codec": ObservabilityPipelineClickhouseDestinationBatchEncodingCodec;

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
    allowNullableFields: {
      baseName: "allow_nullable_fields",
      type: "boolean",
    },
    codec: {
      baseName: "codec",
      type: "ObservabilityPipelineClickhouseDestinationBatchEncodingCodec",
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
    return ObservabilityPipelineClickhouseDestinationBatchEncoding.attributeTypeMap;
  }

  public constructor() {}
}
