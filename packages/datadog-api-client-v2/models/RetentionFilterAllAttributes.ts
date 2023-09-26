/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionFilterAllType } from "./RetentionFilterAllType";
import { SpansFilter } from "./SpansFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of the retention filter.
 */
export class RetentionFilterAllAttributes {
  /**
   * The creation timestamp of the retention filter.
   */
  "createdAt"?: number;
  /**
   * The creator of the retention filter.
   */
  "createdBy"?: string;
  /**
   * Shows whether the filter can be edited.
   */
  "editable"?: boolean;
  /**
   * The status of the retention filter (Enabled/Disabled).
   */
  "enabled"?: boolean;
  /**
   * The execution order of the retention filter.
   */
  "executionOrder"?: number;
  /**
   * The spans filter used to index spans.
   */
  "filter"?: SpansFilter;
  /**
   * The type of retention filter.
   */
  "filterType"?: RetentionFilterAllType;
  /**
   * The modification timestamp of the retention filter.
   */
  "modifiedAt"?: number;
  /**
   * The modifier of the retention filter.
   */
  "modifiedBy"?: string;
  /**
   * The name of the retention filter.
   */
  "name"?: string;
  /**
   * Sample rate to apply to spans going through this retention filter,
   * a value of 1.0 keeps all spans matching the query.
   */
  "rate"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "number",
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    editable: {
      baseName: "editable",
      type: "boolean",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    executionOrder: {
      baseName: "execution_order",
      type: "number",
      format: "int64",
    },
    filter: {
      baseName: "filter",
      type: "SpansFilter",
    },
    filterType: {
      baseName: "filter_type",
      type: "RetentionFilterAllType",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "number",
      format: "int64",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    rate: {
      baseName: "rate",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionFilterAllAttributes.attributeTypeMap;
  }

  public constructor() {}
}
