/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes confirming that an LLM Observability prompt was deleted.
*/
export class LLMObsDeletedPromptDataAttributes {
  /**
   * Timestamp when the prompt was deleted.
  */
  "deletedAt": Date;
  /**
   * Customer-provided identifier of the deleted prompt.
  */
  "promptId": string;

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
    "deletedAt": {
      "baseName": "deleted_at",
      "type": "Date",
      "required": true,
      "format": "date-time",
    },
    "promptId": {
      "baseName": "prompt_id",
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




    return LLMObsDeletedPromptDataAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









