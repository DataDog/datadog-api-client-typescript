/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricMetaPageType } from "./MetricMetaPageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Paging attributes. Only present if pagination query parameters were provided.
 */
export class MetricMetaPage {
  /**
   * The cursor used to get the current results, if any.
   */
  "cursor"?: string;
  /**
   * Number of results returned
   */
  "limit"?: number;
  /**
   * The cursor used to get the next results, if any.
   */
  "nextCursor"?: string;
  /**
   * Type of metric pagination.
   */
  "type"?: MetricMetaPageType;

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
    cursor: {
      baseName: "cursor",
      type: "string",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    nextCursor: {
      baseName: "next_cursor",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricMetaPageType",
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
    return MetricMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
