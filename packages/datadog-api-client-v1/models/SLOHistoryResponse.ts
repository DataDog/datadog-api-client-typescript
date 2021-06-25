/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryResponseData } from "./SLOHistoryResponseData";
import { SLOHistoryResponseError } from "./SLOHistoryResponseError";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A service level objective history response.
 */

export class SLOHistoryResponse {
  "data"?: SLOHistoryResponseData;
  /**
   * A list of errors while querying the history data for the service level objective.
   */
  "errors"?: Array<SLOHistoryResponseError>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "SLOHistoryResponseData",
      format: "",
    },
    errors: {
      baseName: "errors",
      type: "Array<SLOHistoryResponseError>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SLOHistoryResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SLOHistoryResponse {
    const res = new SLOHistoryResponse();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "SLOHistoryResponseData",
      ""
    );

    res.errors = ObjectSerializer.deserialize(
      data.errors,
      "Array<SLOHistoryResponseError>",
      ""
    );

    return res;
  }

  static serialize(data: SLOHistoryResponse): { [key: string]: any } {
    const attributeTypes = SLOHistoryResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "SLOHistoryResponseData",
      ""
    );

    res.errors = ObjectSerializer.serialize(
      data.errors,
      "Array<SLOHistoryResponseError>",
      ""
    );

    return res;
  }

  public constructor() {}
}
