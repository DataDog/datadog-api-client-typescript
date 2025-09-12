import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `AwsCurConfigResponseDataAttributesAccountFilters` object.
 */
export class AwsCurConfigResponseDataAttributesAccountFilters {
  /**
   * The `account_filters` `excluded_accounts`.
   */
  "excludedAccounts"?: Array<string>;
  /**
   * The `account_filters` `include_new_accounts`.
   */
  "includeNewAccounts"?: boolean;
  /**
   * The `account_filters` `included_accounts`.
   */
  "includedAccounts"?: Array<string>;
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
    excludedAccounts: {
      baseName: "excluded_accounts",
      type: "Array<string>",
    },
    includeNewAccounts: {
      baseName: "include_new_accounts",
      type: "boolean",
    },
    includedAccounts: {
      baseName: "included_accounts",
      type: "Array<string>",
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
    return AwsCurConfigResponseDataAttributesAccountFilters.attributeTypeMap;
  }

  public constructor() {}
}
