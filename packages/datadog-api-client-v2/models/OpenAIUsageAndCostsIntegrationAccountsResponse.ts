/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAIUsageAndCostsIntegrationAccountResponseData } from "./OpenAIUsageAndCostsIntegrationAccountResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response payload for a list of OpenAI Usage and Costs integration accounts.
 */
export class OpenAIUsageAndCostsIntegrationAccountsResponse {
  /**
   * List of OpenAI Usage and Costs integration accounts.
   */
  "data": Array<OpenAIUsageAndCostsIntegrationAccountResponseData>;

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
      type: "Array<OpenAIUsageAndCostsIntegrationAccountResponseData>",
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
    return OpenAIUsageAndCostsIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
