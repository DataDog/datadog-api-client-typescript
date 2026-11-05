/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayBudgetListAttributes } from "./AiGatewayBudgetListAttributes";
import { AiGatewayBudgetType } from "./AiGatewayBudgetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Budget resource including active-window spend and capacity.
 */
export class AiGatewayBudgetListResource {
  /**
   * Budget configuration including spend and capacity for the active accounting window.
   */
  "attributes": AiGatewayBudgetListAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * AI Gateway budget resource type.
   */
  "type": AiGatewayBudgetType;

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
      type: "AiGatewayBudgetListAttributes",
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
      type: "AiGatewayBudgetType",
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
    return AiGatewayBudgetListResource.attributeTypeMap;
  }

  public constructor() {}
}
