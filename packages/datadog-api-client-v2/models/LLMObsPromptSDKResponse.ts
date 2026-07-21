/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptSDKData } from "./LLMObsPromptSDKData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a flattened LLM Observability prompt version for SDK consumption.
 */
export class LLMObsPromptSDKResponse {
  /**
   * Data object for a flattened LLM Observability prompt version returned for SDK consumption.
   */
  "data": LLMObsPromptSDKData;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "LLMObsPromptSDKData",
      required: true,
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
    return LLMObsPromptSDKResponse.attributeTypeMap;
  }

  public constructor() {}
}
