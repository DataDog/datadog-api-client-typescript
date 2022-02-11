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
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Meta attributes.
 */

export class SecurityMonitoringSignalsListResponseMeta {
  "page"?: SecurityMonitoringSignalsListResponseMetaPage;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      baseName: "page",
      type: "SecurityMonitoringSignalsListResponseMetaPage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalsListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
