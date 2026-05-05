/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleBulkDeleteAttributes } from "./SecurityMonitoringRuleBulkDeleteAttributes";
import { SecurityMonitoringRuleBulkDeleteRequestDataType } from "./SecurityMonitoringRuleBulkDeleteRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for bulk deleting security monitoring rules.
 */
export class SecurityMonitoringRuleBulkDeleteData {
  /**
   * Attributes for bulk deleting security monitoring rules.
   */
  "attributes": SecurityMonitoringRuleBulkDeleteAttributes;
  /**
   * The resource type for a bulk delete request.
   */
  "type": SecurityMonitoringRuleBulkDeleteRequestDataType;

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
      type: "SecurityMonitoringRuleBulkDeleteAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleBulkDeleteRequestDataType",
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
    return SecurityMonitoringRuleBulkDeleteData.attributeTypeMap;
  }

  public constructor() {}
}
