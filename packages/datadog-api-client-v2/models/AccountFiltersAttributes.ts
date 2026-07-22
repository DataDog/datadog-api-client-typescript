/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccountFilteringConfig } from "./AccountFilteringConfig";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes for the account filters of a cloud account.
*/
export class AccountFiltersAttributes {
  /**
   * The account filtering configuration.
  */
  "accountFilters"?: AccountFilteringConfig;
  /**
   * The cloud account ID.
  */
  "accountId"?: string;
  /**
   * The cloud provider of the account, for example `aws`, `aws_cur2`, or `oci`.
  */
  "cloud"?: string;

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
    "accountFilters": {
      "baseName": "account_filters",
      "type": "AccountFilteringConfig",
    },
    "accountId": {
      "baseName": "account_id",
      "type": "string",
    },
    "cloud": {
      "baseName": "cloud",
      "type": "string",
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




    return AccountFiltersAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









