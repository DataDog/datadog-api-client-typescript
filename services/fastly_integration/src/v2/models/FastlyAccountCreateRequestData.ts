import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyAccountCreateRequestAttributes } from "./FastlyAccountCreateRequestAttributes";
import { FastlyAccountType } from "./FastlyAccountType";

/**
 * Data object for creating a Fastly account.
 */
export class FastlyAccountCreateRequestData {
  /**
   * Attributes object for creating a Fastly account.
   */
  "attributes": FastlyAccountCreateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `fastly-accounts`.
   */
  "type": FastlyAccountType;
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
      type: "FastlyAccountCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FastlyAccountType",
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
    return FastlyAccountCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
