/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotationsType } from "./LLMObsAnnotationsType";
import { LLMObsDeleteAnnotationsDataAttributesResponse } from "./LLMObsDeleteAnnotationsDataAttributesResponse";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object for the annotation deletion response.
*/
export class LLMObsDeleteAnnotationsDataResponse {
  /**
   * Attributes of the annotation deletion response.
  */
  "attributes": LLMObsDeleteAnnotationsDataAttributesResponse;
  /**
   * The annotation queue ID.
  */
  "id": string;
  /**
   * Resource type for LLM Observability annotations.
  */
  "type": LLMObsAnnotationsType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "LLMObsDeleteAnnotationsDataAttributesResponse",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LLMObsAnnotationsType",
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




    return LLMObsDeleteAnnotationsDataResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









