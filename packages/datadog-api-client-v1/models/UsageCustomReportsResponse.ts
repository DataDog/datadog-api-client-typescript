/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageCustomReportsData } from "./UsageCustomReportsData";
import { UsageCustomReportsMeta } from "./UsageCustomReportsMeta";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing available custom reports.
 */

export class UsageCustomReportsResponse {
  /**
   * An array of available custom reports.
   */
  "data"?: Array<UsageCustomReportsData>;
  "meta"?: UsageCustomReportsMeta;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "Array<UsageCustomReportsData>",
      format: "",
    },
    meta: {
      baseName: "meta",
      type: "UsageCustomReportsMeta",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageCustomReportsResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageCustomReportsResponse {
    const res = new UsageCustomReportsResponse();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "Array<UsageCustomReportsData>",
      ""
    );

    res.meta = ObjectSerializer.deserialize(
      data.meta,
      "UsageCustomReportsMeta",
      ""
    );

    return res;
  }

  static serialize(data: UsageCustomReportsResponse): { [key: string]: any } {
    const attributeTypes = UsageCustomReportsResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "Array<UsageCustomReportsData>",
      ""
    );

    res.meta = ObjectSerializer.serialize(
      data.meta,
      "UsageCustomReportsMeta",
      ""
    );

    return res;
  }

  public constructor() {}
}
