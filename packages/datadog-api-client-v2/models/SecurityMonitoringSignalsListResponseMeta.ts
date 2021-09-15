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
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Meta attributes.
 */

export class SecurityMonitoringSignalsListResponseMeta {
  "page"?: SecurityMonitoringSignalsListResponseMetaPage;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    page: {
      baseName: "page",
      type: "SecurityMonitoringSignalsListResponseMetaPage",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SecurityMonitoringSignalsListResponseMeta.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SecurityMonitoringSignalsListResponseMeta {
    const res = new SecurityMonitoringSignalsListResponseMeta();

    res.page = ObjectSerializer.deserialize(
      data.page,
      "SecurityMonitoringSignalsListResponseMetaPage",
      ""
    );

    return res;
  }

  static serialize(data: SecurityMonitoringSignalsListResponseMeta): {
    [key: string]: any;
  } {
    const attributeTypes =
      SecurityMonitoringSignalsListResponseMeta.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.page = ObjectSerializer.serialize(
      data.page,
      "SecurityMonitoringSignalsListResponseMetaPage",
      ""
    );

    return res;
  }

  public constructor() {}
}
