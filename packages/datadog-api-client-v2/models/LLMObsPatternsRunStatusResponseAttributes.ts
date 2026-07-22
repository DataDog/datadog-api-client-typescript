/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsActivityProgress } from "./LLMObsPatternsActivityProgress";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of an LLM Observability patterns run status.
*/
export class LLMObsPatternsRunStatusResponseAttributes {
  /**
   * Timestamp when the run was created.
  */
  "createdAt": Date;
  /**
   * List of step-by-step progress entries for a patterns run.
  */
  "progress": Array<LLMObsPatternsActivityProgress>;
  /**
   * Overall status of the run.
  */
  "status": string;
  /**
   * The current step of the run.
  */
  "step": string;

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
    "createdAt": {
      "baseName": "created_at",
      "type": "Date",
      "required": true,
      "format": "date-time",
    },
    "progress": {
      "baseName": "progress",
      "type": "Array<LLMObsPatternsActivityProgress>",
      "required": true,
    },
    "status": {
      "baseName": "status",
      "type": "string",
      "required": true,
    },
    "step": {
      "baseName": "step",
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




    return LLMObsPatternsRunStatusResponseAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









