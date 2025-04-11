import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccountFilteringConfig } from "./AccountFilteringConfig";

/**
 * Attributes for AWS CUR config Patch Request.
 */
export class AwsCURConfigPatchRequestAttributes {
  /**
   * The account filtering configuration.
   */
  "accountFilters"?: AccountFilteringConfig;
  /**
   * Whether or not the Cloud Cost Management account is enabled.
   */
  "isEnabled"?: boolean;
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
    accountFilters: {
      baseName: "account_filters",
      type: "AccountFilteringConfig",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
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
    return AwsCURConfigPatchRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
