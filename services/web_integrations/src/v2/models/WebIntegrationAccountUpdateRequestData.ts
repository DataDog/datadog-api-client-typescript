import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountType } from "./WebIntegrationAccountType";
import { WebIntegrationAccountUpdateRequestAttributes } from "./WebIntegrationAccountUpdateRequestAttributes";

/**
 * Data object for updating a web integration account.
 */
export class WebIntegrationAccountUpdateRequestData {
  /**
   * Attributes object for updating a web integration account.
   */
  "attributes": WebIntegrationAccountUpdateRequestAttributes;
  /**
   * Account resource type.
   */
  "type": WebIntegrationAccountType;
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
      type: "WebIntegrationAccountUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WebIntegrationAccountType",
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
    return WebIntegrationAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
