/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRoutingRuleReplaceData } from "./AiGatewayRoutingRuleReplaceData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to replace an AI Gateway routing rule.
 */
export class AiGatewayRoutingRuleReplaceRequest {
  /**
   * Data used to replace an AI Gateway routing rule.
   */
  "data": AiGatewayRoutingRuleReplaceData;

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
      type: "AiGatewayRoutingRuleReplaceData",
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
    return AiGatewayRoutingRuleReplaceRequest.attributeTypeMap;
  }

  public constructor() {}
}
