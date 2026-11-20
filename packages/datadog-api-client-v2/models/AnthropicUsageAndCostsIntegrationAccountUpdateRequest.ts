/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnthropicUsageAndCostsIntegrationAccountUpdateData } from "./AnthropicUsageAndCostsIntegrationAccountUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request payload to update an Anthropic Usage and Costs integration account.
 */
export class AnthropicUsageAndCostsIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating an Anthropic Usage and Costs integration account.
   */
  "data": AnthropicUsageAndCostsIntegrationAccountUpdateData;

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
      type: "AnthropicUsageAndCostsIntegrationAccountUpdateData",
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
    return AnthropicUsageAndCostsIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
