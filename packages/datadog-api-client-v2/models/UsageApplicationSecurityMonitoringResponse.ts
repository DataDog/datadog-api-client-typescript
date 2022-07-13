/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageDataObject } from "./UsageDataObject";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Application Security Monitoring usage response.
 */
export class UsageApplicationSecurityMonitoringResponse {
  /**
   * Response containing Application Security Monitoring usage.
   */
  "data"?: Array<UsageDataObject>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<UsageDataObject>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageApplicationSecurityMonitoringResponse.attributeTypeMap;
  }

  public constructor() {}
}
