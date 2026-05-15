/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsTraceInteractionType } from "./LLMObsTraceInteractionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An interaction that references an upstream trace, experiment trace, or session.
 */
export class LLMObsTraceInteractionItem {
  /**
   * Upstream entity identifier (trace, experiment trace, or session ID).
   */
  "contentId": string;
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
    contentId: {
      baseName: "content_id",
      type: "string",
      required: true,
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
    return LLMObsTraceInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
