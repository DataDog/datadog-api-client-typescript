/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Configuration for hashing matched sensitive values.
*/
export class ObservabilityPipelineSensitiveDataScannerProcessorActionHash {
  /**
   * Action type that replaces the matched sensitive data with a hashed representation, preserving structure while securing content.
  */
  "action": ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction;
  /**
   * The `ObservabilityPipelineSensitiveDataScannerProcessorActionHash` `options`.
  */
  "options"?: any;

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
    "action": {
      "baseName": "action",
      "type": "ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction",
      "required": true,
    },
    "options": {
      "baseName": "options",
      "type": "any",
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




    return ObservabilityPipelineSensitiveDataScannerProcessorActionHash.attributeTypeMap;

  }

  public constructor() {











  }
}









