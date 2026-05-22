/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotatedInteractionsByTraceDataResponse } from "./LLMObsAnnotatedInteractionsByTraceDataResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing annotated interactions across all queues for the requested content IDs.
 */
export class LLMObsAnnotatedInteractionsByTraceResponse {
  /**
   * Data object for the cross-queue annotated interactions response.
   */
  "data": LLMObsAnnotatedInteractionsByTraceDataResponse;

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
      type: "LLMObsAnnotatedInteractionsByTraceDataResponse",
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
    return LLMObsAnnotatedInteractionsByTraceResponse.attributeTypeMap;
  }

  public constructor() {}
}
