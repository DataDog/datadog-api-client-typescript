import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyAccounResponseAttributes } from "./FastlyAccounResponseAttributes";
import { FastlyAccountType } from "./FastlyAccountType";

/**
 * Data object of a Fastly account.
 */
export class FastlyAccountResponseData {
  /**
   * Attributes object of a Fastly account.
   */
  "attributes": FastlyAccounResponseAttributes;
  /**
   * The ID of the Fastly account, a hash of the account name.
   */
  "id": string;
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
      type: "FastlyAccounResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FastlyAccountType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FastlyAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
