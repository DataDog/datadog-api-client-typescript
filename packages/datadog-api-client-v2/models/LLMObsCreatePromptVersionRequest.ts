/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCreatePromptVersionData } from "./LLMObsCreatePromptVersionData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to create a new version of an LLM Observability prompt.
 */
export class LLMObsCreatePromptVersionRequest {
  /**
   * Data object for creating an LLM Observability prompt version.
   */
  "data": LLMObsCreatePromptVersionData;

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
      type: "LLMObsCreatePromptVersionData",
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
    return LLMObsCreatePromptVersionRequest.attributeTypeMap;
  }

  public constructor() {}
}
