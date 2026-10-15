/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsTemplatesListType } from "./LLMObsPatternsTemplatesListType";
import { LLMObsPatternsTemplatesResponseAttributes } from "./LLMObsPatternsTemplatesResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object of a list of Agent Observability patterns templates.
 */
export class LLMObsPatternsTemplatesResponseData {
  /**
   * Attributes of a list of Agent Observability patterns templates.
   */
  "attributes": LLMObsPatternsTemplatesResponseAttributes;
  /**
   * Identifier of the list response.
   */
  "id": string;
  /**
   * Resource type of a list of Agent Observability patterns templates.
   */
  "type": LLMObsPatternsTemplatesListType;

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
    attributes: {
      baseName: "attributes",
      type: "LLMObsPatternsTemplatesResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsTemplatesListType",
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
    return LLMObsPatternsTemplatesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
