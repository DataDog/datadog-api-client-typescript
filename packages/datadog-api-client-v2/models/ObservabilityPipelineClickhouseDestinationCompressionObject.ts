/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineClickhouseDestinationCompressionAlgorithm } from "./ObservabilityPipelineClickhouseDestinationCompressionAlgorithm";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Structured compression configuration for the ClickHouse destination.
 * Use `algorithm` to specify the compression type and `level` (optional, gzip only) to control compression strength.
*/
export class ObservabilityPipelineClickhouseDestinationCompressionObject {
  /**
   * The compression algorithm applied to outbound HTTP requests.
  */
  "algorithm": ObservabilityPipelineClickhouseDestinationCompressionAlgorithm;
  /**
   * Compression level (1–9). Only applicable when `algorithm` is `gzip`.
  */
  "level"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "algorithm": {
      "baseName": "algorithm",
      "type": "ObservabilityPipelineClickhouseDestinationCompressionAlgorithm",
      "required": true,
    },
    "level": {
      "baseName": "level",
      "type": "number",
      "format": "int64",
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




    return ObservabilityPipelineClickhouseDestinationCompressionObject.attributeTypeMap;

  }

  public constructor() {











  }
}









