/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsExclusionFilter } from "./LogsExclusionFilter";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Represents the index exclusion filter object from configuration API.
 */
export class LogsExclusion {
  /**
   * Exclusion filter is defined by a query, a sampling rule, and a active/inactive toggle.
   */
  "filter"?: LogsExclusionFilter;
  /**
   * Whether or not the exclusion filter is active.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the index exclusion filter.
   */
  "name": string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filter: {
      baseName: "filter",
      type: "LogsExclusionFilter",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsExclusion.attributeTypeMap;
  }

  public constructor() {}
}
