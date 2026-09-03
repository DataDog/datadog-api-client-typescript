/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotatedInteractionDataAttributesResponse } from "./LLMObsAnnotatedInteractionDataAttributesResponse";
import { LLMObsAnnotatedInteractionsType } from "./LLMObsAnnotatedInteractionsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a single annotated interaction.
 */
export class LLMObsAnnotatedInteractionDataResponse {
  /**
   * Attributes containing an annotated interaction and its related events.
   */
  "attributes": LLMObsAnnotatedInteractionDataAttributesResponse;
  /**
   * Unique identifier of the interaction.
   */
  "id": string;
  /**
   * Resource type for annotated interactions.
   */
  "type": LLMObsAnnotatedInteractionsType;

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
      type: "LLMObsAnnotatedInteractionDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnnotatedInteractionsType",
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
    return LLMObsAnnotatedInteractionDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
