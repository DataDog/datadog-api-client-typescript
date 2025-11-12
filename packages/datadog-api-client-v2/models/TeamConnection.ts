/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamConnectionAttributes } from "./TeamConnectionAttributes";
import { TeamConnectionRelationships } from "./TeamConnectionRelationships";
import { TeamConnectionType } from "./TeamConnectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A relationship between a Datadog team and a team from another external system.
 */
export class TeamConnection {
  /**
   * Attributes of the team connection.
   */
  "attributes"?: TeamConnectionAttributes;
  /**
   * The unique identifier of the team connection.
   */
  "id": string;
  /**
   * Relationships of the team connection.
   */
  "relationships"?: TeamConnectionRelationships;
  /**
   * Team connection resource type.
   */
  "type": TeamConnectionType;

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
      type: "TeamConnectionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "TeamConnectionRelationships",
    },
    type: {
      baseName: "type",
      type: "TeamConnectionType",
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
    return TeamConnection.attributeTypeMap;
  }

  public constructor() {}
}
