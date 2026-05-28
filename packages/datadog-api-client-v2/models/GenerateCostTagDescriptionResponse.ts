/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeneratedCostTagDescription } from "./GeneratedCostTagDescription";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response wrapping an AI-generated Cloud Cost Management tag key description.
 */
export class GenerateCostTagDescriptionResponse {
  /**
   * AI-generated Cloud Cost Management tag key description returned by the generate endpoint. The result is returned to the client but is not persisted by this endpoint.
   */
  "data": GeneratedCostTagDescription;

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
    data: {
      baseName: "data",
      type: "GeneratedCostTagDescription",
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
    return GenerateCostTagDescriptionResponse.attributeTypeMap;
  }

  public constructor() {}
}
