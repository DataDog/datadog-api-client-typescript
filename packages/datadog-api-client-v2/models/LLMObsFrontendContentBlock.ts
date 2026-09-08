/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsFrontendContentBlockType } from "./LLMObsFrontendContentBlockType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Validation requirements for a `frontend` display block.
 */
export class LLMObsFrontendContentBlock {
  /**
   * HTML code rendered by a `frontend` block. Required for `frontend` blocks.
   */
  "code": string;
  /**
   * Type discriminator for a `frontend` display block.
   */
  "type"?: LLMObsFrontendContentBlockType;

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
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsFrontendContentBlockType",
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
    return LLMObsFrontendContentBlock.attributeTypeMap;
  }

  public constructor() {}
}
