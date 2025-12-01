/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyLinkCreateRelationships } from "./TeamHierarchyLinkCreateRelationships";
import { TeamHierarchyLinkType } from "./TeamHierarchyLinkType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data provided when creating a team hierarchy link
 */
export class TeamHierarchyLinkCreate {
  /**
   * The related teams that will be connected by the team hierarchy link
   */
  "relationships": TeamHierarchyLinkCreateRelationships;
  /**
   * Team hierarchy link type
   */
  "type": TeamHierarchyLinkType;

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
    relationships: {
      baseName: "relationships",
      type: "TeamHierarchyLinkCreateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamHierarchyLinkType",
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
    return TeamHierarchyLinkCreate.attributeTypeMap;
  }

  public constructor() {}
}
