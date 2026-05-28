/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeneratedCostTagDescriptionAttributes } from "./GeneratedCostTagDescriptionAttributes";
import { GeneratedCostTagDescriptionType } from "./GeneratedCostTagDescriptionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AI-generated Cloud Cost Management tag key description returned by the generate endpoint. The result is returned to the client but is not persisted by this endpoint.
 */
export class GeneratedCostTagDescription {
  /**
   * Attributes of an AI-generated Cloud Cost Management tag key description.
   */
  "attributes": GeneratedCostTagDescriptionAttributes;
  /**
   * The tag key the AI description was generated for.
   */
  "id": string;
  /**
   * Type of the AI-generated Cloud Cost Management tag description resource.
   */
  "type": GeneratedCostTagDescriptionType;

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
      type: "GeneratedCostTagDescriptionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GeneratedCostTagDescriptionType",
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
    return GeneratedCostTagDescription.attributeTypeMap;
  }

  public constructor() {}
}
