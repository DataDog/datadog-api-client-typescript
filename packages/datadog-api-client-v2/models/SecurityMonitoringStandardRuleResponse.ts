/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationRuleComplianceSignalOptions } from "./CloudConfigurationRuleComplianceSignalOptions";
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringReferenceTable } from "./SecurityMonitoringReferenceTable";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleTypeRead } from "./SecurityMonitoringRuleTypeRead";
import { SecurityMonitoringStandardRuleQuery } from "./SecurityMonitoringStandardRuleQuery";
import { SecurityMonitoringThirdPartyRuleCase } from "./SecurityMonitoringThirdPartyRuleCase";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Rule.
*/
export class SecurityMonitoringStandardRuleResponse {
  /**
   * Cases for generating signals.
  */
  "cases"?: Array<SecurityMonitoringRuleCase>;
  /**
   * How to generate compliance signals. Useful for cloud_configuration rules only.
  */
  "complianceSignalOptions"?: CloudConfigurationRuleComplianceSignalOptions;
  /**
   * When the rule was created, timestamp in milliseconds.
  */
  "createdAt"?: number;
  /**
   * User ID of the user who created the rule.
  */
  "creationAuthorId"?: number;
  /**
   * Default Tags for default rules (included in tags)
  */
  "defaultTags"?: Array<string>;
  /**
   * When the rule will be deprecated, timestamp in milliseconds.
  */
  "deprecationDate"?: number;
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
   * The ID of the rule.
  */
  "id"?: string;
  /**
   * Whether the rule is included by default.
  */
  "isDefault"?: boolean;
  /**
   * Whether the rule has been deleted.
  */
  "isDeleted"?: boolean;
  /**
   * Whether the rule is enabled.
  */
  "isEnabled"?: boolean;
  /**
   * Message for generated signals.
  */
  "message"?: string;
  /**
   * The name of the rule.
  */
  "name"?: string;
  /**
   * Options.
  */
  "options"?: SecurityMonitoringRuleOptions;
  /**
   * Queries for selecting logs which are part of the rule.
  */
  "queries"?: Array<SecurityMonitoringStandardRuleQuery>;
  /**
   * Reference tables for the rule.
  */
  "referenceTables"?: Array<SecurityMonitoringReferenceTable>;
  /**
   * Tags for generated signals.
  */
  "tags"?: Array<string>;
  /**
   * Cases for generating signals from third-party rules. Only available for third-party rules.
  */
  "thirdPartyCases"?: Array<SecurityMonitoringThirdPartyRuleCase>;
  /**
   * The rule type.
  */
  "type"?: SecurityMonitoringRuleTypeRead;
  /**
   * User ID of the user who updated the rule.
  */
  "updateAuthorId"?: number;
  /**
   * The date the rule was last updated, in milliseconds.
  */
  "updatedAt"?: number;
  /**
   * The version of the rule.
  */
  "version"?: number;

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
      "type": "Array<SecurityMonitoringRuleCase>",
    },
    "complianceSignalOptions": {
      "baseName": "complianceSignalOptions",
      "type": "CloudConfigurationRuleComplianceSignalOptions",
    },
    "createdAt": {
      "baseName": "createdAt",
      "type": "number",
      "format": "int64",
    },
    "creationAuthorId": {
      "baseName": "creationAuthorId",
      "type": "number",
      "format": "int64",
    },
    "defaultTags": {
      "baseName": "defaultTags",
      "type": "Array<string>",
    },
    "deprecationDate": {
      "baseName": "deprecationDate",
      "type": "number",
      "format": "int64",
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
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "isDefault": {
      "baseName": "isDefault",
      "type": "boolean",
    },
    "isDeleted": {
      "baseName": "isDeleted",
      "type": "boolean",
    },
    "isEnabled": {
      "baseName": "isEnabled",
      "type": "boolean",
    },
    "message": {
      "baseName": "message",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "options": {
      "baseName": "options",
      "type": "SecurityMonitoringRuleOptions",
    },
    "queries": {
      "baseName": "queries",
      "type": "Array<SecurityMonitoringStandardRuleQuery>",
    },
    "referenceTables": {
      "baseName": "referenceTables",
      "type": "Array<SecurityMonitoringReferenceTable>",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "thirdPartyCases": {
      "baseName": "thirdPartyCases",
      "type": "Array<SecurityMonitoringThirdPartyRuleCase>",
    },
    "type": {
      "baseName": "type",
      "type": "SecurityMonitoringRuleTypeRead",
    },
    "updateAuthorId": {
      "baseName": "updateAuthorId",
      "type": "number",
      "format": "int64",
    },
    "updatedAt": {
      "baseName": "updatedAt",
      "type": "number",
      "format": "int64",
    },
    "version": {
      "baseName": "version",
      "type": "number",
      "format": "int64",
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




    return SecurityMonitoringStandardRuleResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









