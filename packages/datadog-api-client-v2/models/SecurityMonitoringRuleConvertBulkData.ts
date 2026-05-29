/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleConvertBulkAttributes } from "./SecurityMonitoringRuleConvertBulkAttributes";
import { SecurityMonitoringRuleConvertBulkDataType } from "./SecurityMonitoringRuleConvertBulkDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for bulk converting security monitoring rules to Terraform.
 */
export class SecurityMonitoringRuleConvertBulkData {
  /**
   * Attributes for bulk converting security monitoring rules to Terraform.
   */
  "attributes": SecurityMonitoringRuleConvertBulkAttributes;
  /**
   * Request ID.
   */
  "id"?: string;
  /**
   * The type of the resource.
   */
  "type": SecurityMonitoringRuleConvertBulkDataType;

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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringRuleConvertBulkAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleConvertBulkDataType",
      required: true,
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
    return SecurityMonitoringRuleConvertBulkData.attributeTypeMap;
  }

  public constructor() {}
}
