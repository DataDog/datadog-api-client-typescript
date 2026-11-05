/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayProviderAttributes } from "./AiGatewayProviderAttributes";
import { AiGatewayProviderRelationships } from "./AiGatewayProviderRelationships";
import { AiGatewayProviderType } from "./AiGatewayProviderType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AI Gateway provider resource.
 */
export class AiGatewayProviderResource {
  /**
   * AI Gateway provider configuration and metadata.
   */
  "attributes": AiGatewayProviderAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Provider relationships.
   */
  "relationships"?: AiGatewayProviderRelationships;
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
      type: "AiGatewayProviderAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "AiGatewayProviderRelationships",
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
    return AiGatewayProviderResource.attributeTypeMap;
  }

  public constructor() {}
}
