/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Options for selecting a predefined library pattern and enabling keyword support.
*/
export class ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions {
  /**
   * Identifier for a predefined pattern from the sensitive data scanner pattern library.
  */
  "id": string;
  /**
   * Whether to augment the pattern with recommended keywords (optional).
  */
  "useRecommendedKeywords"?: boolean;

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
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "useRecommendedKeywords": {
      "baseName": "use_recommended_keywords",
      "type": "boolean",
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




    return ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









