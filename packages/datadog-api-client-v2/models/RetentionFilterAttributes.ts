/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionFilterType } from "./RetentionFilterType";
import { SpansFilter } from "./SpansFilter";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The attributes of the retention filter.
*/
export class RetentionFilterAttributes {
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
   * The type of retention filter. The value should always be spans-sampling-processor.
  */
  "filterType"?: RetentionFilterType;
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
   * Sample rate to apply to spans going through this retention filter.
   * A value of 1.0 keeps all spans matching the query.
  */
  "rate"?: number;
  /**
   * Sample rate to apply to traces containing spans going through this retention filter.
   * A value of 1.0 keeps all traces with spans matching the query.
  */
  "traceRate"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "createdAt": {
      "baseName": "created_at",
      "type": "number",
      "format": "int64",
    },
    "createdBy": {
      "baseName": "created_by",
      "type": "string",
    },
    "editable": {
      "baseName": "editable",
      "type": "boolean",
    },
    "enabled": {
      "baseName": "enabled",
      "type": "boolean",
    },
    "executionOrder": {
      "baseName": "execution_order",
      "type": "number",
      "format": "int64",
    },
    "filter": {
      "baseName": "filter",
      "type": "SpansFilter",
    },
    "filterType": {
      "baseName": "filter_type",
      "type": "RetentionFilterType",
    },
    "modifiedAt": {
      "baseName": "modified_at",
      "type": "number",
      "format": "int64",
    },
    "modifiedBy": {
      "baseName": "modified_by",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "rate": {
      "baseName": "rate",
      "type": "number",
      "format": "double",
    },
    "traceRate": {
      "baseName": "trace_rate",
      "type": "number",
      "format": "double",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return RetentionFilterAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









