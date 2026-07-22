/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptVersionListDataAttributes } from "./LLMObsPromptVersionListDataAttributes";
import { LLMObsPromptVersionType } from "./LLMObsPromptVersionType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object for a prompt version returned in a list.
*/
export class LLMObsPromptVersionListData {
  /**
   * Attributes of a prompt version returned in a list, excluding its template.
  */
  "attributes": LLMObsPromptVersionListDataAttributes;
  /**
   * Unique identifier of the prompt version.
  */
  "id": string;
  /**
   * Resource type of an LLM Observability prompt version.
  */
  "type": LLMObsPromptVersionType;

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
      "type": "LLMObsPromptVersionListDataAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LLMObsPromptVersionType",
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




    return LLMObsPromptVersionListData.attributeTypeMap;

  }

  public constructor() {











  }
}









