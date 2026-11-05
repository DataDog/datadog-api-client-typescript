/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayBudgetInstancesSummaryAttributes } from "./AiGatewayBudgetInstancesSummaryAttributes";
import { AiGatewayBudgetInstancesSummaryType } from "./AiGatewayBudgetInstancesSummaryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Aggregate state across budget instance counters.
 */
export class AiGatewayBudgetInstancesSummaryResource {
  /**
   * Aggregate state across budget instance counters.
   */
  "attributes": AiGatewayBudgetInstancesSummaryAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Budget instance summary resource type.
   */
  "type": AiGatewayBudgetInstancesSummaryType;

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
      type: "AiGatewayBudgetInstancesSummaryAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AiGatewayBudgetInstancesSummaryType",
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
    return AiGatewayBudgetInstancesSummaryResource.attributeTypeMap;
  }

  public constructor() {}
}
