/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnthropicUsageAndCostsIntegrationAccountCreateData } from "./AnthropicUsageAndCostsIntegrationAccountCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request payload to create an Anthropic Usage and Costs integration account.
 */
export class AnthropicUsageAndCostsIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating an Anthropic Usage and Costs integration account.
   */
  "data": AnthropicUsageAndCostsIntegrationAccountCreateData;

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
      type: "AnthropicUsageAndCostsIntegrationAccountCreateData",
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
    return AnthropicUsageAndCostsIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
