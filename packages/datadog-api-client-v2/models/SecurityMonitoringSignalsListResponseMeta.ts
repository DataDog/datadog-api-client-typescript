/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityMonitoringSignalsListResponseMetaPage } from "./SecurityMonitoringSignalsListResponseMetaPage";

export class SecurityMonitoringSignalsListResponseMeta {
  "page"?: SecurityMonitoringSignalsListResponseMetaPage;

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
    page: {
      baseName: "page",
      type: "SecurityMonitoringSignalsListResponseMetaPage",
    },
  };

  static getAttributeTypeMap() {
    return SecurityMonitoringSignalsListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
