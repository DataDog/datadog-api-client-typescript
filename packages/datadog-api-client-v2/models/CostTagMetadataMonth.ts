/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagMetadataMonthType } from "./CostTagMetadataMonthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A month that has Cloud Cost Management tag metadata available for a given provider.
 */
export class CostTagMetadataMonth {
  /**
   * The month, in `YYYY-MM` format.
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management tag metadata month resource.
   */
  "type": CostTagMetadataMonthType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostTagMetadataMonthType",
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
    return CostTagMetadataMonth.attributeTypeMap;
  }

  public constructor() {}
}
