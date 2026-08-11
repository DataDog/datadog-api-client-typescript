import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountType } from "./IntegrationAccountType";
import { TwilioIntegrationAccountUpdateAttributes } from "./TwilioIntegrationAccountUpdateAttributes";

/**
 * Data envelope for updating a Twilio integration account.
 */
export class TwilioIntegrationAccountUpdateData {
  /**
   * Updatable attributes of a Twilio integration account. Every field is optional; only the fields provided are changed.
   */
  "attributes": TwilioIntegrationAccountUpdateAttributes;
  /**
   * JSON:API resource type for an integration account. Always `integration-account`.
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
      type: "TwilioIntegrationAccountUpdateAttributes",
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
    return TwilioIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
