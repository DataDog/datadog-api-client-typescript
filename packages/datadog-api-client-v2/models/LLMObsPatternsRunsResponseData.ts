/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsRunsListType } from "./LLMObsPatternsRunsListType";
import { LLMObsPatternsRunsResponseAttributes } from "./LLMObsPatternsRunsResponseAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object of an LLM Observability patterns runs response.
*/
export class LLMObsPatternsRunsResponseData {
  /**
   * Attributes of an LLM Observability patterns runs response.
  */
  "attributes": LLMObsPatternsRunsResponseAttributes;
  /**
   * Identifier of the configuration the runs belong to.
  */
  "id": string;
  /**
   * Resource type of a list of LLM Observability patterns runs.
  */
  "type": LLMObsPatternsRunsListType;

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
      "type": "LLMObsPatternsRunsResponseAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LLMObsPatternsRunsListType",
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




    return LLMObsPatternsRunsResponseData.attributeTypeMap;

  }

  public constructor() {











  }
}









