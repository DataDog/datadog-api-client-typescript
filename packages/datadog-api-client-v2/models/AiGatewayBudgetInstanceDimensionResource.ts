/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayBudgetInstanceDimensionAttributes } from "./AiGatewayBudgetInstanceDimensionAttributes";
import { AiGatewayBudgetInstanceDimensionType } from "./AiGatewayBudgetInstanceDimensionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Values of one budget split dimension.
 */
export class AiGatewayBudgetInstanceDimensionResource {
  /**
   * Values of one budget split dimension.
   */
  "attributes": AiGatewayBudgetInstanceDimensionAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Budget split dimension values resource type.
   */
  "type": AiGatewayBudgetInstanceDimensionType;

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
      type: "AiGatewayBudgetInstanceDimensionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayBudgetInstanceDimensionType",
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
    return AiGatewayBudgetInstanceDimensionResource.attributeTypeMap;
  }

  public constructor() {}
}
