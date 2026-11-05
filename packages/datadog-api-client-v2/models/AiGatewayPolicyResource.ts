/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayPolicyAttributes } from "./AiGatewayPolicyAttributes";
import { AiGatewayPolicyType } from "./AiGatewayPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AI Gateway routing policy resource.
 */
export class AiGatewayPolicyResource {
  /**
   * Routing policy configuration.
   */
  "attributes": AiGatewayPolicyAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * AI Gateway routing policy resource type.
   */
  "type": AiGatewayPolicyType;

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
      type: "AiGatewayPolicyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayPolicyType",
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
    return AiGatewayPolicyResource.attributeTypeMap;
  }

  public constructor() {}
}
