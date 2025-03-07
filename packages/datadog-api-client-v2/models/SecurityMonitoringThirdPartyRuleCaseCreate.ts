/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case when a signal is generated by a third party rule.
 */
export class SecurityMonitoringThirdPartyRuleCaseCreate {
  /**
   * Name of the case.
   */
  "name"?: string;
  /**
   * Notification targets for each case.
   */
  "notifications"?: Array<string>;
  /**
   * A query to map a third party event to this case.
   */
  "query"?: string;
  /**
   * Severity of the Security Signal.
   */
  "status": SecurityMonitoringRuleSeverity;

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
    name: {
      baseName: "name",
      type: "string",
    },
    notifications: {
      baseName: "notifications",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringRuleSeverity",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringThirdPartyRuleCaseCreate.attributeTypeMap;
  }

  public constructor() {}
}
