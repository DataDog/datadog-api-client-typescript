/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAgentV2Attributes } from "./FleetAgentV2Attributes";
import { FleetAgentV2ResourceType } from "./FleetAgentV2ResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Datadog Agent resource in the v2 list response.
 */
export class FleetAgentV2 {
  /**
   * Attributes of a Datadog Agent in the v2 list response.
   */
  "attributes": FleetAgentV2Attributes;
  /**
   * The unique agent key identifier.
   */
  "id": string;
  /**
   * The type of the agent resource.
   */
  "type": FleetAgentV2ResourceType;

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
      type: "FleetAgentV2Attributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetAgentV2ResourceType",
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
    return FleetAgentV2.attributeTypeMap;
  }

  public constructor() {}
}
