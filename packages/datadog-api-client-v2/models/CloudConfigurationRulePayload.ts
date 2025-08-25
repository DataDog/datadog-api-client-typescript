/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationRuleCaseCreate } from "./CloudConfigurationRuleCaseCreate";
import { CloudConfigurationRuleComplianceSignalOptions } from "./CloudConfigurationRuleComplianceSignalOptions";
import { CloudConfigurationRuleOptions } from "./CloudConfigurationRuleOptions";
import { CloudConfigurationRuleType } from "./CloudConfigurationRuleType";
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The payload of a cloud configuration rule.
*/
export class CloudConfigurationRulePayload {
  /**
   * Description of generated findings and signals (severity and channels to be notified in case of a signal). Must contain exactly one item.
  */
  "cases": Array<CloudConfigurationRuleCaseCreate>;
  /**
   * How to generate compliance signals. Useful for cloud_configuration rules only.
  */
  "complianceSignalOptions": CloudConfigurationRuleComplianceSignalOptions;
  /**
   * Custom/Overridden message for generated signals (used in case of Default rule update).
  */
  "customMessage"?: string;
  /**
   * Custom/Overridden name of the rule (used in case of Default rule update).
  */
  "customName"?: string;
  /**
   * Additional queries to filter matched events before they are processed.
  */
  "filters"?: Array<SecurityMonitoringFilter>;
  /**
   * Whether the rule is enabled.
  */
  "isEnabled": boolean;
  /**
   * Message in markdown format for generated findings and signals.
  */
  "message": string;
  /**
   * The name of the rule.
  */
  "name": string;
  /**
   * Options on cloud configuration rules.
  */
  "options": CloudConfigurationRuleOptions;
  /**
   * Tags for generated findings and signals.
  */
  "tags"?: Array<string>;
  /**
   * The rule type.
  */
  "type"?: CloudConfigurationRuleType;

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
    "cases": {
      "baseName": "cases",
      "type": "Array<CloudConfigurationRuleCaseCreate>",
      "required": true,
    },
    "complianceSignalOptions": {
      "baseName": "complianceSignalOptions",
      "type": "CloudConfigurationRuleComplianceSignalOptions",
      "required": true,
    },
    "customMessage": {
      "baseName": "customMessage",
      "type": "string",
    },
    "customName": {
      "baseName": "customName",
      "type": "string",
    },
    "filters": {
      "baseName": "filters",
      "type": "Array<SecurityMonitoringFilter>",
    },
    "isEnabled": {
      "baseName": "isEnabled",
      "type": "boolean",
      "required": true,
    },
    "message": {
      "baseName": "message",
      "type": "string",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "options": {
      "baseName": "options",
      "type": "CloudConfigurationRuleOptions",
      "required": true,
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "type": {
      "baseName": "type",
      "type": "CloudConfigurationRuleType",
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




    return CloudConfigurationRulePayload.attributeTypeMap;

  }

  public constructor() {











  }
}









