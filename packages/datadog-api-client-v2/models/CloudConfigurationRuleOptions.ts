/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationComplianceRuleOptions } from "./CloudConfigurationComplianceRuleOptions";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Options on cloud configuration rules.
*/
export class CloudConfigurationRuleOptions {
  /**
   * Options for cloud_configuration rules.
   * Fields `resourceType` and `regoRule` are mandatory when managing custom `cloud_configuration` rules.
  */
  "complianceRuleOptions": CloudConfigurationComplianceRuleOptions;

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
    "complianceRuleOptions": {
      "baseName": "complianceRuleOptions",
      "type": "CloudConfigurationComplianceRuleOptions",
      "required": true,
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




    return CloudConfigurationRuleOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









