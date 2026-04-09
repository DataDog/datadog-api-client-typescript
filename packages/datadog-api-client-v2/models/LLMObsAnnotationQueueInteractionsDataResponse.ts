/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotationQueueInteractionsDataAttributesResponse } from "./LLMObsAnnotationQueueInteractionsDataAttributesResponse";
import { LLMObsAnnotationQueueInteractionsType } from "./LLMObsAnnotationQueueInteractionsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for the interaction addition response.
 */
export class LLMObsAnnotationQueueInteractionsDataResponse {
  /**
   * Attributes of the interaction addition response.
   */
  "attributes": LLMObsAnnotationQueueInteractionsDataAttributesResponse;
  /**
   * The queue ID the interactions were added to.
   */
  "id": string;
  /**
   * Resource type for annotation queue interactions.
   */
  "type": LLMObsAnnotationQueueInteractionsType;

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
      type: "LLMObsAnnotationQueueInteractionsDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnnotationQueueInteractionsType",
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
    return LLMObsAnnotationQueueInteractionsDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
