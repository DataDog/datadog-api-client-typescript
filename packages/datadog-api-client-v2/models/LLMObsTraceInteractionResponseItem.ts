/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsTraceInteractionType } from "./LLMObsTraceInteractionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A trace, experiment trace, or session interaction result.
 */
export class LLMObsTraceInteractionResponseItem {
  /**
   * Whether this interaction already existed in the queue.
   */
  "alreadyExisted": boolean;
  /**
   * Upstream entity identifier supplied by the caller.
   */
  "contentId": string;
  /**
   * Timestamp when the interaction was added to the queue.
   */
  "createdAt": Date;
  /**
   * Unique identifier of the interaction.
   */
  "id": string;
  /**
   * Timestamp when the interaction was last updated.
   */
  "modifiedAt": Date;
  /**
   * Type of an upstream-entity interaction.
   */
  "type": LLMObsTraceInteractionType;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    type: {
      baseName: "type",
      type: "LLMObsTraceInteractionType",
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
    return LLMObsTraceInteractionResponseItem.attributeTypeMap;
  }

  public constructor() {}
}
