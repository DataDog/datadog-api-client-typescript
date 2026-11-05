/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayBudgetInstanceResetData } from "./AiGatewayBudgetInstanceResetData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to reset one budget instance's active-period spend.
 */
export class AiGatewayBudgetInstanceResetRequest {
  /**
   * Data used to reset one budget instance's active-period spend.
   */
  "data": AiGatewayBudgetInstanceResetData;

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
      type: "AiGatewayBudgetInstanceResetData",
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
    return AiGatewayBudgetInstanceResetRequest.attributeTypeMap;
  }

  public constructor() {}
}
