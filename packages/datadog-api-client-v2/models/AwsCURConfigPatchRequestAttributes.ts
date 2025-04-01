/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccountFilteringConfig } from "./AccountFilteringConfig";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
    "accountFilters": {
      "baseName": "account_filters",
      "type": "AccountFilteringConfig",
    },
    "isEnabled": {
      "baseName": "is_enabled",
      "type": "boolean",
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




    return AwsCURConfigPatchRequestAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









