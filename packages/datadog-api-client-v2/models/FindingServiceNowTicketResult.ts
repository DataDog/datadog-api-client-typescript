/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Result of the ServiceNow ticket creation or attachment.
 */
export class FindingServiceNowTicketResult {
  /**
   * ServiceNow instance name extracted from the ticket URL.
   */
  "instanceName"?: string;
  /**
   * Unique identifier of the ServiceNow incident record.
   */
  "sysId"?: string;
  /**
   * Direct link to the ServiceNow incident record.
   */
  "sysTargetLink"?: string;
  /**
   * Unique identifier of the target ServiceNow record.
   */
  "sysTargetSysId"?: string;
  /**
   * ServiceNow table containing the incident record.
   */
  "tableName"?: string;
  /**
   * URL of the ServiceNow incident record.
   */
  "url"?: string;

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
    instanceName: {
      baseName: "instance_name",
      type: "string",
    },
    sysId: {
      baseName: "sys_id",
      type: "string",
    },
    sysTargetLink: {
      baseName: "sys_target_link",
      type: "string",
    },
    sysTargetSysId: {
      baseName: "sys_target_sys_id",
      type: "string",
    },
    tableName: {
      baseName: "table_name",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return FindingServiceNowTicketResult.attributeTypeMap;
  }

  public constructor() {}
}
