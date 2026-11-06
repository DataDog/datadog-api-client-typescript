import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthClaimMatchMode } from "./OIDCCloudAuthClaimMatchMode";

/**
 * A token claim must match at least one of the configured values.
 */
export class OIDCCloudAuthClaimMatcher {
  /**
   * Name of the token claim.
   */
  "claim": string;
  /**
   * Case-sensitive matching mode. Exact compares strings. Glob matches the entire value: * matches any number of characters, including /, and ? matches one character. Other characters are literal; escaping is not supported.
   */
  "mode"?: OIDCCloudAuthClaimMatchMode;
  /**
   * Accepted values for this claim.
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
    return OIDCCloudAuthClaimMatcher.attributeTypeMap;
  }

  public constructor() {}
}
