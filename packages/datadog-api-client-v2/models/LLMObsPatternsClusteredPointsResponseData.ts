/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsClusteredPointsResponseAttributes } from "./LLMObsPatternsClusteredPointsResponseAttributes";
import { LLMObsPatternsClusteredPointsType } from "./LLMObsPatternsClusteredPointsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object of an LLM Observability patterns clustered points response.
 */
export class LLMObsPatternsClusteredPointsResponseData {
  /**
   * Attributes of an LLM Observability patterns clustered points response.
   */
  "attributes": LLMObsPatternsClusteredPointsResponseAttributes;
  /**
   * Identifier of the topic the points belong to.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability patterns clustered points response.
   */
  "type": LLMObsPatternsClusteredPointsType;

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
      type: "LLMObsPatternsClusteredPointsResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsClusteredPointsType",
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
    return LLMObsPatternsClusteredPointsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
