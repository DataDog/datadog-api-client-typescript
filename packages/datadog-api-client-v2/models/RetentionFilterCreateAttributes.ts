/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionFilterType } from "./RetentionFilterType";
import { SpansFilterCreate } from "./SpansFilterCreate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing the configuration of the retention filter to create/update.
 */
export class RetentionFilterCreateAttributes {
  /**
   * Enable/Disable the retention filter.
   */
  "enabled": boolean;
  /**
   * The spans filter. Spans matching this filter will be indexed and stored.
   */
  "filter": SpansFilterCreate;
  /**
   * The type of retention filter. The value should always be spans-sampling-processor.
   */
  "filterType": RetentionFilterType;
  /**
   * The name of the retention filter.
   */
  "name": string;
  /**
   * Sample rate to apply to spans going through this retention filter,
   * a value of 1.0 keeps all spans matching the query.
   */
  "rate": number;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "SpansFilterCreate",
      required: true,
    },
    filterType: {
      baseName: "filter_type",
      type: "RetentionFilterType",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rate: {
      baseName: "rate",
      type: "number",
      required: true,
      format: "double",
    },
    traceRate: {
      baseName: "trace_rate",
      type: "number",
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionFilterCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
