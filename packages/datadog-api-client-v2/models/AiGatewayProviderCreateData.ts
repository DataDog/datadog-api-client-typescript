/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayProviderCreateAttributes } from "./AiGatewayProviderCreateAttributes";
import { AiGatewayProviderType } from "./AiGatewayProviderType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data used to create an AI Gateway provider.
 */
export class AiGatewayProviderCreateData {
  /**
   * Attributes used to create an AI Gateway provider.
   */
  "attributes": AiGatewayProviderCreateAttributes;
  /**
   * AI Gateway provider resource type.
   */
  "type": AiGatewayProviderType;

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
      type: "AiGatewayProviderCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayProviderType",
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
    return AiGatewayProviderCreateData.attributeTypeMap;
  }

  public constructor() {}
}
