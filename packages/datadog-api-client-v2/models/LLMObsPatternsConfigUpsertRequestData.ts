/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsConfigType } from "./LLMObsPatternsConfigType";
import { LLMObsPatternsConfigUpsertRequestAttributes } from "./LLMObsPatternsConfigUpsertRequestAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object for creating or updating an LLM Observability patterns configuration.
*/
export class LLMObsPatternsConfigUpsertRequestData {
  /**
   * Attributes for creating or updating an LLM Observability patterns configuration.
  */
  "attributes": LLMObsPatternsConfigUpsertRequestAttributes;
  /**
   * Resource type of an LLM Observability patterns configuration.
  */
  "type": LLMObsPatternsConfigType;

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
      "type": "LLMObsPatternsConfigUpsertRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LLMObsPatternsConfigType",
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




    return LLMObsPatternsConfigUpsertRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









