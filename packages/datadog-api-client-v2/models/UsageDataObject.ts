/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageAttributesObject } from "./UsageAttributesObject";
import { UsageTimeSeriesType } from "./UsageTimeSeriesType";
import { AttributeTypeMap } from "../util";

/**
 * Usage data.
 */

export class UsageDataObject {
  "attributes"?: UsageAttributesObject;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  "type"?: UsageTimeSeriesType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "UsageAttributesObject",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageTimeSeriesType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageDataObject.attributeTypeMap;
  }

  public constructor() {}
}
