import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AmsIntegrationAccountType } from "./AmsIntegrationAccountType";
import { AmsIntegrationAccountUpdateRequestAttributes } from "./AmsIntegrationAccountUpdateRequestAttributes";

/**
 * Data object for updating a web integration account.
 */
export class AmsIntegrationAccountUpdateRequestData {
  /**
   * Attributes for updating a web integration account. All fields are optional;
   * only provide the fields you want to update.
   */
  "attributes"?: AmsIntegrationAccountUpdateRequestAttributes;
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
      type: "AmsIntegrationAccountUpdateRequestAttributes",
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
    return AmsIntegrationAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
