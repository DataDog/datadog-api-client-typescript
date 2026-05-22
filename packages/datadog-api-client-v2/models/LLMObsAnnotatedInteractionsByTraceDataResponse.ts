/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotatedInteractionsByTraceDataAttributesResponse } from "./LLMObsAnnotatedInteractionsByTraceDataAttributesResponse";
import { LLMObsAnnotatedInteractionsByTraceType } from "./LLMObsAnnotatedInteractionsByTraceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for the cross-queue annotated interactions response.
 */
export class LLMObsAnnotatedInteractionsByTraceDataResponse {
  /**
   * Attributes of the cross-queue annotated interactions response.
   */
  "attributes": LLMObsAnnotatedInteractionsByTraceDataAttributesResponse;
  /**
   * Opaque identifier for the response object.
   */
  "id": string;
  /**
   * Resource type for cross-queue annotated interactions lookup.
   */
  "type": LLMObsAnnotatedInteractionsByTraceType;

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
      type: "LLMObsAnnotatedInteractionsByTraceDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnnotatedInteractionsByTraceType",
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
    return LLMObsAnnotatedInteractionsByTraceDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
