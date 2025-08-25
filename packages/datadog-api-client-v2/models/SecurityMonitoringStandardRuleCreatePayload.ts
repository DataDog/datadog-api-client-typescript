/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalculatedField } from "./CalculatedField";
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringReferenceTable } from "./SecurityMonitoringReferenceTable";
import { SecurityMonitoringRuleCaseCreate } from "./SecurityMonitoringRuleCaseCreate";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleTypeCreate } from "./SecurityMonitoringRuleTypeCreate";
import { SecurityMonitoringSchedulingOptions } from "./SecurityMonitoringSchedulingOptions";
import { SecurityMonitoringStandardRuleQuery } from "./SecurityMonitoringStandardRuleQuery";
import { SecurityMonitoringThirdPartyRuleCaseCreate } from "./SecurityMonitoringThirdPartyRuleCaseCreate";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Create a new rule.
*/
export class SecurityMonitoringStandardRuleCreatePayload {
  /**
   * Calculated fields. Only allowed for scheduled rules - in other words, when schedulingOptions is also defined.
  */
  "calculatedFields"?: Array<CalculatedField>;
  /**
   * Cases for generating signals.
  */
  "cases": Array<SecurityMonitoringRuleCaseCreate>;
  /**
   * Additional queries to filter matched events before they are processed. This field is deprecated for log detection, signal correlation, and workload security rules.
  */
  "filters"?: Array<SecurityMonitoringFilter>;
  /**
   * Additional grouping to perform on top of the existing groups in the query section. Must be a subset of the existing groups.
  */
  "groupSignalsBy"?: Array<string>;
  /**
   * Whether the notifications include the triggering group-by values in their title.
  */
  "hasExtendedTitle"?: boolean;
  /**
   * Whether the rule is enabled.
  */
  "isEnabled": boolean;
  /**
   * Message for generated signals.
  */
  "message": string;
  /**
   * The name of the rule.
  */
  "name": string;
  /**
   * Options.
  */
  "options": SecurityMonitoringRuleOptions;
  /**
   * Queries for selecting logs which are part of the rule.
  */
  "queries": Array<SecurityMonitoringStandardRuleQuery>;
  /**
   * Reference tables for the rule.
  */
  "referenceTables"?: Array<SecurityMonitoringReferenceTable>;
  /**
   * Options for scheduled rules. When this field is present, the rule runs based on the schedule. When absent, it runs real-time on ingested logs.
  */
  "schedulingOptions"?: SecurityMonitoringSchedulingOptions;
  /**
   * Tags for generated signals.
  */
  "tags"?: Array<string>;
  /**
   * Cases for generating signals from third-party rules. Only available for third-party rules.
  */
  "thirdPartyCases"?: Array<SecurityMonitoringThirdPartyRuleCaseCreate>;
  /**
   * The rule type.
  */
  "type"?: SecurityMonitoringRuleTypeCreate;

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
    "calculatedFields": {
      "baseName": "calculatedFields",
      "type": "Array<CalculatedField>",
    },
    "cases": {
      "baseName": "cases",
      "type": "Array<SecurityMonitoringRuleCaseCreate>",
      "required": true,
    },
    "filters": {
      "baseName": "filters",
      "type": "Array<SecurityMonitoringFilter>",
    },
    "groupSignalsBy": {
      "baseName": "groupSignalsBy",
      "type": "Array<string>",
    },
    "hasExtendedTitle": {
      "baseName": "hasExtendedTitle",
      "type": "boolean",
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
      "type": "SecurityMonitoringRuleOptions",
      "required": true,
    },
    "queries": {
      "baseName": "queries",
      "type": "Array<SecurityMonitoringStandardRuleQuery>",
      "required": true,
    },
    "referenceTables": {
      "baseName": "referenceTables",
      "type": "Array<SecurityMonitoringReferenceTable>",
    },
    "schedulingOptions": {
      "baseName": "schedulingOptions",
      "type": "SecurityMonitoringSchedulingOptions",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "thirdPartyCases": {
      "baseName": "thirdPartyCases",
      "type": "Array<SecurityMonitoringThirdPartyRuleCaseCreate>",
    },
    "type": {
      "baseName": "type",
      "type": "SecurityMonitoringRuleTypeCreate",
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




    return SecurityMonitoringStandardRuleCreatePayload.attributeTypeMap;

  }

  public constructor() {











  }
}









