/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSocketDestinationFramingBytesMethod } from "./ObservabilityPipelineSocketDestinationFramingBytesMethod";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Event data is not delimited at all.
*/
export class ObservabilityPipelineSocketDestinationFramingBytes {
  /**
   * The definition of `ObservabilityPipelineSocketDestinationFramingBytesMethod` object.
  */
  "method": ObservabilityPipelineSocketDestinationFramingBytesMethod;

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
    "method": {
      "baseName": "method",
      "type": "ObservabilityPipelineSocketDestinationFramingBytesMethod",
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




    return ObservabilityPipelineSocketDestinationFramingBytes.attributeTypeMap;

  }

  public constructor() {











  }
}









