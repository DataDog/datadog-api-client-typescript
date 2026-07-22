/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A partial error for a single annotation that could not be processed.
*/
export class LLMObsAnnotationError {
  /**
   * ID of the annotation that failed, if applicable.
  */
  "annotationId"?: string;
  /**
   * Error message.
  */
  "error": string;
  /**
   * ID of the interaction that failed.
  */
  "interactionId": string;

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
    "annotationId": {
      "baseName": "annotation_id",
      "type": "string",
    },
    "error": {
      "baseName": "error",
      "type": "string",
      "required": true,
    },
    "interactionId": {
      "baseName": "interaction_id",
      "type": "string",
      "required": true,
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




    return LLMObsAnnotationError.attributeTypeMap;

  }

  public constructor() {











  }
}









