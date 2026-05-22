/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotatedInteractionByTraceItem } from "./LLMObsAnnotatedInteractionByTraceItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the cross-queue annotated interactions response.
 */
export class LLMObsAnnotatedInteractionsByTraceDataAttributesResponse {
  /**
   * List of annotated interactions across all queues for the requested content IDs.
   */
  "annotatedInteractions": Array<LLMObsAnnotatedInteractionByTraceItem>;
  /**
   * Total number of annotated interactions matching the query.
   */
  "totalCount": number;

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
    annotatedInteractions: {
      baseName: "annotated_interactions",
      type: "Array<LLMObsAnnotatedInteractionByTraceItem>",
      required: true,
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      required: true,
      format: "int32",
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
    return LLMObsAnnotatedInteractionsByTraceDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
