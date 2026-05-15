/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostCurrency } from "./CostCurrency";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The dominant Cloud Cost Management billing currency for the requested period. The `data` array contains at most one entry, and is empty when no currency data is available.
 */
export class CostCurrencyResponse {
  /**
   * The dominant billing currency. Empty when no data is available, or a single entry otherwise.
   */
  "data": Array<CostCurrency>;

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
    data: {
      baseName: "data",
      type: "Array<CostCurrency>",
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
    return CostCurrencyResponse.attributeTypeMap;
  }

  public constructor() {}
}
