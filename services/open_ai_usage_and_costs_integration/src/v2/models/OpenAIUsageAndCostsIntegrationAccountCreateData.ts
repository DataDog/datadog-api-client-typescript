import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountType } from "./IntegrationAccountType";
import { OpenAIUsageAndCostsIntegrationAccountCreateAttributes } from "./OpenAIUsageAndCostsIntegrationAccountCreateAttributes";

/**
 * Data envelope for creating an OpenAI Usage and Costs integration account.
 */
export class OpenAIUsageAndCostsIntegrationAccountCreateData {
  /**
   * Writable attributes used to create an OpenAI Usage and Costs integration account.
   */
  "attributes": OpenAIUsageAndCostsIntegrationAccountCreateAttributes;
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
      type: "OpenAIUsageAndCostsIntegrationAccountCreateAttributes",
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
    return OpenAIUsageAndCostsIntegrationAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
