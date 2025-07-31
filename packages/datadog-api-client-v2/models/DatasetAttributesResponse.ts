/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FiltersPerProduct } from "./FiltersPerProduct";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Dataset metadata and configuration(s).
 */
export class DatasetAttributesResponse {
  /**
   * Timestamp when the dataset was created.
   */
  "createdAt"?: Date;
  /**
   * Unique ID of the user who created the dataset.
   */
  "createdBy"?: string;
  /**
   * Name of the dataset.
   */
  "name"?: string;
  /**
   * List of access principals, formatted as `principal_type:id`. Principal can be 'team' or 'role'.
   */
  "principals"?: Array<string>;
  /**
   * List of product-specific filters.
   */
  "productFilters"?: Array<FiltersPerProduct>;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    principals: {
      baseName: "principals",
      type: "Array<string>",
    },
    productFilters: {
      baseName: "product_filters",
      type: "Array<FiltersPerProduct>",
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
    return DatasetAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
