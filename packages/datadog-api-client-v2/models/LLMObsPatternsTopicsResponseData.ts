/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsTopicsResponseAttributes } from "./LLMObsPatternsTopicsResponseAttributes";
import { LLMObsPatternsTopicsType } from "./LLMObsPatternsTopicsType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object of an LLM Observability patterns topics response.
*/
export class LLMObsPatternsTopicsResponseData {
  /**
   * Attributes of an LLM Observability patterns topics response.
  */
  "attributes": LLMObsPatternsTopicsResponseAttributes;
  /**
   * Identifier of the run the topics belong to.
  */
  "id": string;
  /**
   * Resource type of an LLM Observability patterns topics response.
  */
  "type": LLMObsPatternsTopicsType;

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
      "type": "LLMObsPatternsTopicsResponseAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LLMObsPatternsTopicsType",
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




    return LLMObsPatternsTopicsResponseData.attributeTypeMap;

  }

  public constructor() {











  }
}









