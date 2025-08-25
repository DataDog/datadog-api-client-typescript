/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod } from "./ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Byte frames which are delimited by a chosen character.
*/
export class ObservabilityPipelineSocketSourceFramingCharacterDelimited {
  /**
   * A single ASCII character used to delimit events.
  */
  "delimiter": string;
  /**
   * Byte frames which are delimited by a chosen character.
  */
  "method": ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod;

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
    "delimiter": {
      "baseName": "delimiter",
      "type": "string",
      "required": true,
    },
    "method": {
      "baseName": "method",
      "type": "ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod",
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




    return ObservabilityPipelineSocketSourceFramingCharacterDelimited.attributeTypeMap;

  }

  public constructor() {











  }
}









