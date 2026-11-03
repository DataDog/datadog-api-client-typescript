/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomForecastEntryTagFilter } from "./CustomForecastEntryTagFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A monthly entry of a custom budget forecast.
 */
export class CustomForecastEntry {
  /**
   * Forecast amount for the month.
   */
  "amount": number;
  /**
   * Month the custom forecast entry applies to, in `YYYYMM` format.
   */
  "month": number;
  /**
   * Tag filters that scope this custom forecast entry to specific resources.
   */
  "tagFilters": Array<CustomForecastEntryTagFilter>;

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
    amount: {
      baseName: "amount",
      type: "number",
      required: true,
      format: "double",
    },
    month: {
      baseName: "month",
      type: "number",
      required: true,
      format: "int64",
    },
    tagFilters: {
      baseName: "tag_filters",
      type: "Array<CustomForecastEntryTagFilter>",
      required: true,
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
    return CustomForecastEntry.attributeTypeMap;
  }

  public constructor() {}
}
