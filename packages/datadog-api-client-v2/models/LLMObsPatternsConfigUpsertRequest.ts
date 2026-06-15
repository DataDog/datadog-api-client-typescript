/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsConfigUpsertRequestData } from "./LLMObsPatternsConfigUpsertRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to create or update an LLM Observability patterns configuration.
 */
export class LLMObsPatternsConfigUpsertRequest {
  /**
   * Data object for creating or updating an LLM Observability patterns configuration.
   */
  "data": LLMObsPatternsConfigUpsertRequestData;

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
      type: "LLMObsPatternsConfigUpsertRequestData",
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
    return LLMObsPatternsConfigUpsertRequest.attributeTypeMap;
  }

  public constructor() {}
}
