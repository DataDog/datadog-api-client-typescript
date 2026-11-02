/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JourneyMapGroupByAudience } from "./JourneyMapGroupByAudience";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Group by configuration for the Journey Paths widget.
 */
export class JourneyMapGroupBy {
  /**
   * Facet to group by. Must be a valid tag name.
   */
  "facet": string;
  /**
   * Audience the group by facet is read from.
   */
  "source"?: JourneyMapGroupByAudience;
  /**
   * Facet values to keep.
   */
  "valueFilters": Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "JourneyMapGroupByAudience",
    },
    valueFilters: {
      baseName: "value_filters",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JourneyMapGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
