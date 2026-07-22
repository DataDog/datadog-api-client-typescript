/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCreatePromptDataAttributes } from "./LLMObsCreatePromptDataAttributes";
import { LLMObsPromptType } from "./LLMObsPromptType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object for creating an LLM Observability prompt.
*/
export class LLMObsCreatePromptData {
  /**
   * Attributes for creating an LLM Observability prompt and its first version. `prompt_id` and `template` are required; all other attributes are optional.
  */
  "attributes": LLMObsCreatePromptDataAttributes;
  /**
   * Resource type of an LLM Observability prompt.
  */
  "type": LLMObsPromptType;

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
      "type": "LLMObsCreatePromptDataAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LLMObsPromptType",
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




    return LLMObsCreatePromptData.attributeTypeMap;

  }

  public constructor() {











  }
}









