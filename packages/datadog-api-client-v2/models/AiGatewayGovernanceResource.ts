/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayGovernanceAttributes } from "./AiGatewayGovernanceAttributes";
import { AiGatewayGovernanceType } from "./AiGatewayGovernanceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Organization-wide AI Gateway governance resource.
 */
export class AiGatewayGovernanceResource {
  /**
   * Organization-wide AI Gateway governance controls.
   */
  "attributes": AiGatewayGovernanceAttributes;
  /**
   * Singleton governance resource identifier.
   */
  "id": string;
  /**
   * AI Gateway governance resource type.
   */
  "type": AiGatewayGovernanceType;

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
      type: "AiGatewayGovernanceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayGovernanceType",
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
    return AiGatewayGovernanceResource.attributeTypeMap;
  }

  public constructor() {}
}
