/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FunnelQuery } from "./FunnelQuery";
import { FunnelRequestType } from "./FunnelRequestType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Updated funnel widget.
 */

export class FunnelWidgetRequest {
  "query": FunnelQuery;
  "requestType": FunnelRequestType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    query: {
      baseName: "query",
      type: "FunnelQuery",
      format: "",
    },
    requestType: {
      baseName: "request_type",
      type: "FunnelRequestType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FunnelWidgetRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): FunnelWidgetRequest {
    const res = new FunnelWidgetRequest();

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'FunnelWidgetRequest' object"
      );
    }
    res.query = ObjectSerializer.deserialize(data.query, "FunnelQuery", "");

    if (data.request_type === undefined) {
      throw new TypeError(
        "missing required attribute 'request_type' on 'FunnelWidgetRequest' object"
      );
    }
    if (["funnel", undefined].includes(data.request_type)) {
      res.requestType = data.request_type;
    } else {
      const raw = new FunnelWidgetRequest();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: FunnelWidgetRequest): { [key: string]: any } {
    const attributeTypes = FunnelWidgetRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'FunnelWidgetRequest' object"
      );
    }
    res.query = ObjectSerializer.serialize(data.query, "FunnelQuery", "");

    if (data.requestType === undefined) {
      throw new TypeError(
        "missing required attribute 'request_type' on 'FunnelWidgetRequest' object"
      );
    }
    if (["funnel", undefined].includes(data.requestType)) {
      res.request_type = data.requestType;
    } else {
      throw TypeError(`invalid enum value ${data.requestType} for requestType`);
    }

    return res;
  }

  public constructor() {}
}
