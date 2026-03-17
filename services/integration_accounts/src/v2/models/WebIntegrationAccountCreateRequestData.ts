import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountCreateRequestAttributes } from "./WebIntegrationAccountCreateRequestAttributes";
import { WebIntegrationAccountType } from "./WebIntegrationAccountType";

/**
 * Data object for creating a web integration account.
 */
export class WebIntegrationAccountCreateRequestData {
  /**
   * Attributes for creating a web integration account.
   */
  "attributes": WebIntegrationAccountCreateRequestAttributes;
  /**
   * The JSON:API type for web integration accounts.
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
      type: "WebIntegrationAccountCreateRequestAttributes",
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
    return WebIntegrationAccountCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
