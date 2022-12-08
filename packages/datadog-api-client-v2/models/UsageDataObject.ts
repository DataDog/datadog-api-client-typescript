/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageAttributesObject } from "./UsageAttributesObject";
import { UsageTimeSeriesType } from "./UsageTimeSeriesType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Usage data.
 */
export class UsageDataObject {
  /**
   * Usage attributes data.
   */
  "attributes"?: UsageAttributesObject;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of usage data.
   */
  "type"?: UsageTimeSeriesType | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
