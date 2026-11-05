/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelGroupCreateAttributes } from "./AiGatewayModelGroupCreateAttributes";
import { AiGatewayModelGroupType } from "./AiGatewayModelGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data used to create an AI Gateway model group.
 */
export class AiGatewayModelGroupCreateData {
  /**
   * Attributes used to create an AI Gateway model group.
   */
  "attributes": AiGatewayModelGroupCreateAttributes;
  /**
   * AI Gateway model group resource type.
   */
  "type": AiGatewayModelGroupType;

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
      type: "AiGatewayModelGroupCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelGroupType",
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
    return AiGatewayModelGroupCreateData.attributeTypeMap;
  }

  public constructor() {}
}
