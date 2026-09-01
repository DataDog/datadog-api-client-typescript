/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsFrontendContent } from "./LLMObsFrontendContent";
import { LLMObsFrontendInteractionType } from "./LLMObsFrontendInteractionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A frontend interaction result.
 */
export class LLMObsFrontendInteractionResponseItem {
  /**
   * Whether this interaction already existed in the queue.
   */
  "alreadyExisted": boolean;
  /**
   * Server-generated deterministic identifier derived from the content.
   */
  "contentId": string;
  /**
   * Web content that makes up a `frontend` interaction.
   */
  "frontend": LLMObsFrontendContent;
  /**
   * Unique identifier of the interaction.
   */
  "id": string;
  /**
   * Type discriminator for a `frontend` interaction.
   */
  "type": LLMObsFrontendInteractionType;

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
    alreadyExisted: {
      baseName: "already_existed",
      type: "boolean",
      required: true,
    },
    contentId: {
      baseName: "content_id",
      type: "string",
      required: true,
    },
    frontend: {
      baseName: "frontend",
      type: "LLMObsFrontendContent",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsFrontendInteractionType",
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
    return LLMObsFrontendInteractionResponseItem.attributeTypeMap;
  }

  public constructor() {}
}
