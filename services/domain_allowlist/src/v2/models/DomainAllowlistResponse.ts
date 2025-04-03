import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DomainAllowlistResponseData } from "./DomainAllowlistResponseData";

/**
 * Response containing information about the email domain allowlist.
 */
export class DomainAllowlistResponse {
  /**
   * The email domain allowlist response for an org.
   */
  "data"?: DomainAllowlistResponseData;
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
    data: {
      baseName: "data",
      type: "DomainAllowlistResponseData",
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
    return DomainAllowlistResponse.attributeTypeMap;
  }

  public constructor() {}
}
