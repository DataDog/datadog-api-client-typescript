/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
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

  static getAttributeTypeMap() {
    return PagerDutyService.attributeTypeMap;
  }

  public constructor() {}
}
