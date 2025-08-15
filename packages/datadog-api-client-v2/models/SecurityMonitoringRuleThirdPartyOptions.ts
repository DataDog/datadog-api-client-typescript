/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";
import { SecurityMonitoringThirdPartyRootQuery } from "./SecurityMonitoringThirdPartyRootQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options on third party detection method.
 */
export class SecurityMonitoringRuleThirdPartyOptions {
  /**
   * Notification targets for the logs that do not correspond to any of the cases.
   */
  "defaultNotifications"?: Array<string>;
  /**
   * Severity of the Security Signal.
   */
  "defaultStatus"?: SecurityMonitoringRuleSeverity;
  /**
   * Queries to be combined with third party case queries. Each of them can have different group by fields, to aggregate differently based on the type of alert.
   */
  "rootQueries"?: Array<SecurityMonitoringThirdPartyRootQuery>;
  /**
   * A template for the signal title; if omitted, the title is generated based on the case name.
   */
  "signalTitleTemplate"?: string;

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
    defaultNotifications: {
      baseName: "defaultNotifications",
      type: "Array<string>",
    },
    defaultStatus: {
      baseName: "defaultStatus",
      type: "SecurityMonitoringRuleSeverity",
    },
    rootQueries: {
      baseName: "rootQueries",
      type: "Array<SecurityMonitoringThirdPartyRootQuery>",
    },
    signalTitleTemplate: {
      baseName: "signalTitleTemplate",
      type: "string",
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
    return SecurityMonitoringRuleThirdPartyOptions.attributeTypeMap;
  }

  public constructor() {}
}
