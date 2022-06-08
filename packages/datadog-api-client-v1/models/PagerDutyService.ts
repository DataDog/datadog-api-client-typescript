/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The PagerDuty service that is available for integration with Datadog.
 */
export class PagerDutyService {
  /**
   * Your service key in PagerDuty.
   */
  "serviceKey": string;
  /**
   * Your service name associated with a service key in PagerDuty.
   */
  "serviceName": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    serviceKey: {
      baseName: "service_key",
      type: "string",
      required: true,
    },
    serviceName: {
      baseName: "service_name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PagerDutyService.attributeTypeMap;
  }

  public constructor() {}
}
