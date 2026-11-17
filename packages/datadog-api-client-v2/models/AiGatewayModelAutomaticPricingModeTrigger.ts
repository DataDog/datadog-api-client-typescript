/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelAutomaticPricingFieldMatch } from "./AiGatewayModelAutomaticPricingFieldMatch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request fields that select a priced mode.
 */
export class AiGatewayModelAutomaticPricingModeTrigger {
  /**
   * Request body fields that must match.
   */
  "body"?: Array<AiGatewayModelAutomaticPricingFieldMatch>;
  /**
   * Request headers that must match.
   */
  "headers"?: Array<AiGatewayModelAutomaticPricingFieldMatch>;
  /**
   * Priced mode selected by the fields.
   */
  "mode": string;

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
    body: {
      baseName: "body",
      type: "Array<AiGatewayModelAutomaticPricingFieldMatch>",
    },
    headers: {
      baseName: "headers",
      type: "Array<AiGatewayModelAutomaticPricingFieldMatch>",
    },
    mode: {
      baseName: "mode",
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
    return AiGatewayModelAutomaticPricingModeTrigger.attributeTypeMap;
  }

  public constructor() {}
}
