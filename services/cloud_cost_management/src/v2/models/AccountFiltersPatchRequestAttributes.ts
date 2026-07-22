import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccountFilteringConfig } from "./AccountFilteringConfig";

/**
 * Attributes for an account filters patch request.
 */
export class AccountFiltersPatchRequestAttributes {
  /**
   * The account filtering configuration.
   */
  "accountFilters": AccountFilteringConfig;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountFilters: {
      baseName: "account_filters",
      type: "AccountFilteringConfig",
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
    return AccountFiltersPatchRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
