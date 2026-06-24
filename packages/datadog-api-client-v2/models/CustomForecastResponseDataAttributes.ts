/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomForecastEntry } from "./CustomForecastEntry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a custom forecast.
 */
export class CustomForecastResponseDataAttributes {
  /**
   * The UUID of the budget that this custom forecast belongs to.
   */
  "budgetUid": string;
  /**
   * Timestamp the custom forecast was created, in Unix milliseconds.
   */
  "createdAt": number;
  /**
   * The id of the user that created the custom forecast.
   */
  "createdBy": string;
  /**
   * Monthly custom forecast entries.
   */
  "entries": Array<CustomForecastEntry>;
  /**
   * Timestamp the custom forecast was last updated, in Unix milliseconds.
   */
  "updatedAt": number;
  /**
   * The id of the user that last updated the custom forecast.
   */
  "updatedBy": string;

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
    budgetUid: {
      baseName: "budget_uid",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      required: true,
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    entries: {
      baseName: "entries",
      type: "Array<CustomForecastEntry>",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "number",
      required: true,
      format: "int64",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "string",
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
    return CustomForecastResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
