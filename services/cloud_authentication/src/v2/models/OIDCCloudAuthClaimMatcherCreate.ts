import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthClaimMatchMode } from "./OIDCCloudAuthClaimMatchMode";

/**
 * Claim condition for creating a provider or persona mapping. A token claim must match at least one configured value.
 */
export class OIDCCloudAuthClaimMatcherCreate {
  /**
   * Name of the token claim.
   */
  "claim": string;
  /**
   * Case-sensitive matching mode. Exact compares strings. Glob matches the entire value: * matches any number of characters, including /, and ? matches one character. Other characters are literal; escaping is not supported.
   */
  "mode"?: OIDCCloudAuthClaimMatchMode;
  /**
   * Accepted values for this claim. Each value is limited to 500 UTF-8 bytes when creating the resource.
   */
  "values": Array<string>;
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
    claim: {
      baseName: "claim",
      type: "string",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "OIDCCloudAuthClaimMatchMode",
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return OIDCCloudAuthClaimMatcherCreate.attributeTypeMap;
  }

  public constructor() {}
}
