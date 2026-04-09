/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotatedInteractionsDataAttributesResponse } from "./LLMObsAnnotatedInteractionsDataAttributesResponse";
import { LLMObsAnnotatedInteractionsType } from "./LLMObsAnnotatedInteractionsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for annotated interactions.
 */
export class LLMObsAnnotatedInteractionsDataResponse {
  /**
   * Attributes containing the list of annotated interactions.
   */
  "attributes": LLMObsAnnotatedInteractionsDataAttributesResponse;
  /**
   * The queue ID.
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
      type: "LLMObsAnnotatedInteractionsDataAttributesResponse",
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
    return LLMObsAnnotatedInteractionsDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
