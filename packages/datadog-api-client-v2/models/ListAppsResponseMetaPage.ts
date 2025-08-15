/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information on the total number of apps, to be used for pagination.
 */
export class ListAppsResponseMetaPage {
  /**
   * The total number of apps under the Datadog organization, disregarding any filters applied.
   */
  "totalCount"?: number;
  /**
   * The total number of apps that match the specified filters.
   */
  "totalFilteredCount"?: number;

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
    totalCount: {
      baseName: "totalCount",
      type: "number",
      format: "int64",
    },
    totalFilteredCount: {
      baseName: "totalFilteredCount",
      type: "number",
      format: "int64",
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
    return ListAppsResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
