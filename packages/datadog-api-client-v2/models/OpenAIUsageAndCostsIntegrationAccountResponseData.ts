/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationAccountType } from "./IntegrationAccountType";
import { OpenAIUsageAndCostsIntegrationAccountResponseAttributes } from "./OpenAIUsageAndCostsIntegrationAccountResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope of an OpenAI Usage and Costs integration account, including server-assigned identity.
 */
export class OpenAIUsageAndCostsIntegrationAccountResponseData {
  /**
   * Attributes of an OpenAI Usage and Costs integration account returned in responses.
   */
  "attributes": OpenAIUsageAndCostsIntegrationAccountResponseAttributes;
  /**
   * Server-generated unique identifier of the OpenAI Usage and Costs integration account.
   */
  "id": string;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;

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
      type: "OpenAIUsageAndCostsIntegrationAccountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return OpenAIUsageAndCostsIntegrationAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
