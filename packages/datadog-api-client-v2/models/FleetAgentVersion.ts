/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAgentVersionAttributes } from "./FleetAgentVersionAttributes";
import { FleetAgentVersionResourceType } from "./FleetAgentVersionResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents an available Datadog Agent version.
 */
export class FleetAgentVersion {
  "attributes"?: FleetAgentVersionAttributes;
  /**
   * Unique identifier for the Agent version (same as version).
   */
  "id": string;
  /**
   * The type of Agent version resource.
   */
  "type": FleetAgentVersionResourceType;

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
      type: "FleetAgentVersionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetAgentVersionResourceType",
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
    return FleetAgentVersion.attributeTypeMap;
  }

  public constructor() {}
}
