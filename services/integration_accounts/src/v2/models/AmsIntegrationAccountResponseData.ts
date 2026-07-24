import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AmsIntegrationAccountAttributes } from "./AmsIntegrationAccountAttributes";
import { AmsIntegrationAccountType } from "./AmsIntegrationAccountType";

/**
 * Data object for a web integration account response.
 */
export class AmsIntegrationAccountResponseData {
  /**
   * Attributes for a web integration account.
   */
  "attributes": AmsIntegrationAccountAttributes;
  /**
   * The unique identifier for the account.
   */
  "id": string;
  /**
   * The JSON:API type for web integration accounts.
   */
  "type": AmsIntegrationAccountType;
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
      type: "AmsIntegrationAccountAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AmsIntegrationAccountType",
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
    return AmsIntegrationAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
