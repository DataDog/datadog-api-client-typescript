/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes related to the dashboard, including title, popularity, and url.
 */
export class MetricDashboardAttributes {
  /**
   * Value from 0 to 5 that ranks popularity of the dashboard.
   */
  "popularity"?: number;
  /**
   * List of tag keys used in the asset.
   */
  "tags"?: Array<string>;
  /**
   * Title of the asset.
   */
  "title"?: string;
  /**
   * URL path of the asset.
   */
  "url"?: string;

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
    popularity: {
      baseName: "popularity",
      type: "number",
      format: "double",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricDashboardAttributes.attributeTypeMap;
  }

  public constructor() {}
}
