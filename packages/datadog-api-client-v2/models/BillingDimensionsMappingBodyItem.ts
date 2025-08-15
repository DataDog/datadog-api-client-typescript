/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActiveBillingDimensionsType } from "./ActiveBillingDimensionsType";
import { BillingDimensionsMappingBodyItemAttributes } from "./BillingDimensionsMappingBodyItemAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The mapping data for each billing dimension.
 */
export class BillingDimensionsMappingBodyItem {
  /**
   * Mapping of billing dimensions to endpoint keys.
   */
  "attributes"?: BillingDimensionsMappingBodyItemAttributes;
  /**
   * ID of the billing dimension.
   */
  "id"?: string;
  /**
   * Type of active billing dimensions data.
   */
  "type"?: ActiveBillingDimensionsType;

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
      type: "BillingDimensionsMappingBodyItemAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ActiveBillingDimensionsType",
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
    return BillingDimensionsMappingBodyItem.attributeTypeMap;
  }

  public constructor() {}
}
