import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DomainAllowlist } from "./DomainAllowlist";

/**
 * Request containing the desired email domain allowlist configuration.
 */
export class DomainAllowlistRequest {
  /**
   * The email domain allowlist for an org.
   */
  "data": DomainAllowlist;
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
      type: "DomainAllowlist",
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
    return DomainAllowlistRequest.attributeTypeMap;
  }

  public constructor() {}
}
