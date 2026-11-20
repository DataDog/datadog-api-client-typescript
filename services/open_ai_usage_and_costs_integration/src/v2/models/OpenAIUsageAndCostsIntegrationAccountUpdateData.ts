import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountType } from "./IntegrationAccountType";
import { OpenAIUsageAndCostsIntegrationAccountUpdateAttributes } from "./OpenAIUsageAndCostsIntegrationAccountUpdateAttributes";

/**
 * Data envelope for updating an OpenAI Usage and Costs integration account.
 */
export class OpenAIUsageAndCostsIntegrationAccountUpdateData {
  /**
   * Writable attributes used to update an OpenAI Usage and Costs integration account. Every field is optional. Only the provided fields are changed. When `dataflows` is provided, only the dataflow IDs in the request are modified. Dataflows omitted from the map keep their current configuration.
   */
  "attributes": OpenAIUsageAndCostsIntegrationAccountUpdateAttributes;
  /**
   * Unique identifier of the OpenAI Usage and Costs integration account to update.
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
      type: "OpenAIUsageAndCostsIntegrationAccountUpdateAttributes",
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
    return OpenAIUsageAndCostsIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
