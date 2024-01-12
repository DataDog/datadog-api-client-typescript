/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSuppressionCreateData } from "./SecurityMonitoringSuppressionCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object that includes the suppression rule that you would like to create.
 */
export class SecurityMonitoringSuppressionCreateRequest {
  /**
   * Object for a single suppression rule.
   */
  "data": SecurityMonitoringSuppressionCreateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "SecurityMonitoringSuppressionCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSuppressionCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
