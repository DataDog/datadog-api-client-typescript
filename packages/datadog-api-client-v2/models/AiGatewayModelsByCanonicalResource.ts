/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelsByCanonicalAttributes } from "./AiGatewayModelsByCanonicalAttributes";
import { AiGatewayModelsByCanonicalType } from "./AiGatewayModelsByCanonicalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Canonical model grouping resource.
 */
export class AiGatewayModelsByCanonicalResource {
  /**
   * Provider entries grouped under one canonical model ID.
   */
  "attributes": AiGatewayModelsByCanonicalAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Canonical model grouping resource type.
   */
  "type": AiGatewayModelsByCanonicalType;

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
      type: "AiGatewayModelsByCanonicalAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelsByCanonicalType",
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
    return AiGatewayModelsByCanonicalResource.attributeTypeMap;
  }

  public constructor() {}
}
