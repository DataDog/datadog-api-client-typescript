/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAIPostmortemDataAttributesResponse } from "./IncidentAIPostmortemDataAttributesResponse";
import { IncidentAIPostmortemResponseType } from "./IncidentAIPostmortemResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AI postmortem data in a response.
 */
export class IncidentAIPostmortemDataResponse {
  /**
   * Attributes of an AI-generated incident postmortem.
   */
  "attributes": IncidentAIPostmortemDataAttributesResponse;
  /**
   * The incident identifier.
   */
  "id": string;
  /**
   * AI postmortem response resource type.
   */
  "type": IncidentAIPostmortemResponseType;

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
      type: "IncidentAIPostmortemDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentAIPostmortemResponseType",
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
    return IncidentAIPostmortemDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
