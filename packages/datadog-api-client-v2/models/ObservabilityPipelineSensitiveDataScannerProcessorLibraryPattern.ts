/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType } from "./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Specifies a pattern from Datadog’s sensitive data detection library to match known sensitive data types.
*/
export class ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern {
  /**
   * Options for selecting a predefined library pattern and enabling keyword support.
  */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions;
  /**
   * Indicates that a predefined library pattern is used.
  */
  "type": ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType;

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
    "options": {
      "baseName": "options",
      "type": "ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern.attributeTypeMap;

  }

  public constructor() {











  }
}









