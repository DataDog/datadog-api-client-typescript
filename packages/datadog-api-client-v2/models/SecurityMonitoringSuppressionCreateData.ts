/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSuppressionCreateAttributes } from "./SecurityMonitoringSuppressionCreateAttributes";
import { SecurityMonitoringSuppressionType } from "./SecurityMonitoringSuppressionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single suppression rule.
 */
export class SecurityMonitoringSuppressionCreateData {
  /**
   * Object containing the attributes of the suppression rule to be created.
   */
  "attributes": SecurityMonitoringSuppressionCreateAttributes;
  /**
   * The type of the resource. The value should always be `suppressions`.
   */
  "type": SecurityMonitoringSuppressionType;

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
      type: "SecurityMonitoringSuppressionCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSuppressionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSuppressionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
