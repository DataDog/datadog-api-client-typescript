/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TenancyProductsDataAttributes } from "./TenancyProductsDataAttributes";
import { TenancyProductsDataType } from "./TenancyProductsDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class TenancyProductsData {
  "attributes"?: TenancyProductsDataAttributes;
  "id"?: string;
  /**
   * OCI tenancy product resource type.
   */
  "type": TenancyProductsDataType;

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
    attributes: {
      baseName: "attributes",
      type: "TenancyProductsDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TenancyProductsDataType",
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
    return TenancyProductsData.attributeTypeMap;
  }

  public constructor() {}
}
