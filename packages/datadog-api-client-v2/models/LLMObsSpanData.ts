/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsSpanAttributes } from "./LLMObsSpanAttributes";
import { LLMObsSpanType } from "./LLMObsSpanType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single LLM Observability span.
 */
export class LLMObsSpanData {
  /**
   * Attributes of an LLM Observability span.
   */
  "attributes": LLMObsSpanAttributes;
  /**
   * Unique identifier of the span.
   */
  "id": string;
  /**
   * Resource type for an LLM Observability span.
   */
  "type": LLMObsSpanType;

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
      type: "LLMObsSpanAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsSpanType",
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
    return LLMObsSpanData.attributeTypeMap;
  }

  public constructor() {}
}
