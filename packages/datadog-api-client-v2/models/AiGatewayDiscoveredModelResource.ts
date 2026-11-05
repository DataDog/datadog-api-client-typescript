/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayDiscoveredModelAttributes } from "./AiGatewayDiscoveredModelAttributes";
import { AiGatewayDiscoveredModelType } from "./AiGatewayDiscoveredModelType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Discovered provider model resource.
 */
export class AiGatewayDiscoveredModelResource {
  /**
   * Model discovered from a provider integration account.
   */
  "attributes": AiGatewayDiscoveredModelAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Discovered provider model resource type.
   */
  "type": AiGatewayDiscoveredModelType;

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
      type: "AiGatewayDiscoveredModelAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayDiscoveredModelType",
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
    return AiGatewayDiscoveredModelResource.attributeTypeMap;
  }

  public constructor() {}
}
