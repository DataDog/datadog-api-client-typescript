/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The account filtering configuration.
*/
export class AccountFilteringConfig {
  /**
   * The AWS account IDs to be excluded from your billing dataset. This field is used when `include_new_accounts` is `true`.
  */
  "excludedAccounts"?: Array<string>;
  /**
   * Whether or not to automatically include new member accounts by default in your billing dataset.
  */
  "includeNewAccounts"?: boolean;
  /**
   * The AWS account IDs to be included in your billing dataset. This field is used when `include_new_accounts` is `false`.
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
    "excludedAccounts": {
      "baseName": "excluded_accounts",
      "type": "Array<string>",
    },
    "includeNewAccounts": {
      "baseName": "include_new_accounts",
      "type": "boolean",
    },
    "includedAccounts": {
      "baseName": "included_accounts",
      "type": "Array<string>",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return AccountFilteringConfig.attributeTypeMap;

  }

  public constructor() {











  }
}









