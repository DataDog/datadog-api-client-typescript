/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A metric SLI query. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator to be used because this will sum up all request counts instead of averaging them, or taking the max or min of all of those requests.
 */

export class ServiceLevelObjectiveQuery {
  /**
   * A Datadog metric query for total (valid) events.
   */
  "denominator": string;
  /**
   * A Datadog metric query for good events.
   */
  "numerator": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    denominator: {
      baseName: "denominator",
      type: "string",
      format: "",
    },
    numerator: {
      baseName: "numerator",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ServiceLevelObjectiveQuery.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): ServiceLevelObjectiveQuery {
    const res = new ServiceLevelObjectiveQuery();

    if (data.denominator === undefined) {
      throw new TypeError(
        "missing required attribute 'denominator' on 'ServiceLevelObjectiveQuery' object"
      );
    }
    res.denominator = ObjectSerializer.deserialize(
      data.denominator,
      "string",
      ""
    );

    if (data.numerator === undefined) {
      throw new TypeError(
        "missing required attribute 'numerator' on 'ServiceLevelObjectiveQuery' object"
      );
    }
    res.numerator = ObjectSerializer.deserialize(data.numerator, "string", "");

    return res;
  }

  static serialize(data: ServiceLevelObjectiveQuery): { [key: string]: any } {
    const attributeTypes = ServiceLevelObjectiveQuery.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.denominator === undefined) {
      throw new TypeError(
        "missing required attribute 'denominator' on 'ServiceLevelObjectiveQuery' object"
      );
    }
    res.denominator = ObjectSerializer.serialize(
      data.denominator,
      "string",
      ""
    );

    if (data.numerator === undefined) {
      throw new TypeError(
        "missing required attribute 'numerator' on 'ServiceLevelObjectiveQuery' object"
      );
    }
    res.numerator = ObjectSerializer.serialize(data.numerator, "string", "");

    return res;
  }

  public constructor() {}
}
