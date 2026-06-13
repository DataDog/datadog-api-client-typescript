/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsRunsResponseData } from "./LLMObsPatternsRunsResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the completed runs of an LLM Observability patterns configuration.
 */
export class LLMObsPatternsRunsResponse {
  /**
   * Data object of an LLM Observability patterns runs response.
   */
  "data": LLMObsPatternsRunsResponseData;

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
      type: "LLMObsPatternsRunsResponseData",
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
    return LLMObsPatternsRunsResponse.attributeTypeMap;
  }

  public constructor() {}
}
