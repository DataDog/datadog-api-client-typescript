import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyAccountType } from "./FastlyAccountType";
import { FastlyAccountUpdateRequestAttributes } from "./FastlyAccountUpdateRequestAttributes";

/**
 * Data object for updating a Fastly account.
 */
export class FastlyAccountUpdateRequestData {
  /**
   * Attributes object for updating a Fastly account.
   */
  "attributes"?: FastlyAccountUpdateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `fastly-accounts`.
   */
  "type"?: FastlyAccountType;
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
      type: "FastlyAccountUpdateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "FastlyAccountType",
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
    return FastlyAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
