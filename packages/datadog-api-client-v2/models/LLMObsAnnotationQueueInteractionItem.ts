/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsInteractionType } from "./LLMObsInteractionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single interaction to add to an annotation queue.
 */
export class LLMObsAnnotationQueueInteractionItem {
  /**
   * Identifier of the content (such as trace ID) for this interaction.
   */
  "contentId": string;
  /**
   * Type of interaction in an annotation queue.
   */
  "type": LLMObsInteractionType;

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
    contentId: {
      baseName: "content_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsInteractionType",
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
    return LLMObsAnnotationQueueInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
