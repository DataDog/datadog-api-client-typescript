/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSuppressionType } from "./SecurityMonitoringSuppressionType";
import { SecurityMonitoringSuppressionUpdateAttributes } from "./SecurityMonitoringSuppressionUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new suppression properties; partial updates are supported.
 */
export class SecurityMonitoringSuppressionUpdateData {
  /**
   * The suppression rule properties to be updated.
   */
  "attributes": SecurityMonitoringSuppressionUpdateAttributes;
  /**
   * The type of the resource. The value should always be `suppressions`.
   */
  "type": SecurityMonitoringSuppressionType;

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
      type: "SecurityMonitoringSuppressionUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSuppressionType",
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
    return SecurityMonitoringSuppressionUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
