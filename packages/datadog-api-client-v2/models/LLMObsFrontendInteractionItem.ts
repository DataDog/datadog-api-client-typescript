/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsFrontendContent } from "./LLMObsFrontendContent";
import { LLMObsFrontendInteractionType } from "./LLMObsFrontendInteractionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An interaction whose rendered content is supplied directly as web
 * content. The server generates `content_id` deterministically from the
 * content.
 */
export class LLMObsFrontendInteractionItem {
  /**
   * Web content that makes up a `frontend` interaction.
   */
  "frontend": LLMObsFrontendContent;
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
    frontend: {
      baseName: "frontend",
      type: "LLMObsFrontendContent",
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
    return LLMObsFrontendInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
