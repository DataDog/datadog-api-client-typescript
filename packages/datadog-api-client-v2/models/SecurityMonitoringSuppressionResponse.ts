/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSuppression } from "./SecurityMonitoringSuppression";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object containing a single suppression rule.
 */
export class SecurityMonitoringSuppressionResponse {
  /**
   * The suppression rule's properties.
   */
  "data"?: SecurityMonitoringSuppression;

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
      type: "SecurityMonitoringSuppression",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSuppressionResponse.attributeTypeMap;
  }

  public constructor() {}
}
