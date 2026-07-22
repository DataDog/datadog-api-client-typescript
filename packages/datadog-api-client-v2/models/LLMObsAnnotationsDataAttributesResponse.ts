/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotationError } from "./LLMObsAnnotationError";
import { LLMObsAnnotationItemResponse } from "./LLMObsAnnotationItemResponse";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of the annotations response.
*/
export class LLMObsAnnotationsDataAttributesResponse {
  /**
   * Successfully created or updated annotations.
  */
  "annotations": Array<LLMObsAnnotationItemResponse>;
  /**
   * Partial errors for annotations that could not be processed.
  */
  "errors"?: Array<LLMObsAnnotationError>;

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
    "annotations": {
      "baseName": "annotations",
      "type": "Array<LLMObsAnnotationItemResponse>",
      "required": true,
    },
    "errors": {
      "baseName": "errors",
      "type": "Array<LLMObsAnnotationError>",
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




    return LLMObsAnnotationsDataAttributesResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









