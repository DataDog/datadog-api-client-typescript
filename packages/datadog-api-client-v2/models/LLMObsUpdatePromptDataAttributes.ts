/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes for updating an LLM Observability prompt. At least one of `title` or `description` must be provided; both attributes are optional individually.
*/
export class LLMObsUpdatePromptDataAttributes {
  /**
   * Optional new description for the prompt.
  */
  "description"?: string;
  /**
   * Optional new title for the prompt.
  */
  "title"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "description": {
      "baseName": "description",
      "type": "string",
    },
    "title": {
      "baseName": "title",
      "type": "string",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return LLMObsUpdatePromptDataAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









