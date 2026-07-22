/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsRunSummary } from "./LLMObsPatternsRunSummary";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of an LLM Observability patterns runs response.
*/
export class LLMObsPatternsRunsResponseAttributes {
  /**
   * List of patterns runs.
  */
  "runs": Array<LLMObsPatternsRunSummary>;

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
    "runs": {
      "baseName": "runs",
      "type": "Array<LLMObsPatternsRunSummary>",
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




    return LLMObsPatternsRunsResponseAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









