/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageReportsType } from "./UsageReportsType";
import { UsageSpecifiedCustomReportsAttributes } from "./UsageSpecifiedCustomReportsAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Response containing date and type for specified custom reports.
 */
export class UsageSpecifiedCustomReportsData {
  /**
   * The response containing attributes for specified custom reports.
   */
  "attributes"?: UsageSpecifiedCustomReportsAttributes;
  /**
   * The date for specified custom reports.
   */
  "id"?: string;
  /**
   * The type of reports.
   */
  "type"?: UsageReportsType | UnparsedObject;

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
      type: "UsageSpecifiedCustomReportsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageReportsType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSpecifiedCustomReportsData.attributeTypeMap;
  }

  public constructor() {}
}
