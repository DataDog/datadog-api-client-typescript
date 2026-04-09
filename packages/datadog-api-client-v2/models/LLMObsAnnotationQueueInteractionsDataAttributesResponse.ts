/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotationQueueInteractionResponseItem } from "./LLMObsAnnotationQueueInteractionResponseItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the interaction addition response.
 */
export class LLMObsAnnotationQueueInteractionsDataAttributesResponse {
  /**
   * List of interactions that were processed.
   */
  "interactions": Array<LLMObsAnnotationQueueInteractionResponseItem>;

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
    interactions: {
      baseName: "interactions",
      type: "Array<LLMObsAnnotationQueueInteractionResponseItem>",
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
    return LLMObsAnnotationQueueInteractionsDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
