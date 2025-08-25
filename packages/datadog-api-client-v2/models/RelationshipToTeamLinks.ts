/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToTeamLinkData } from "./RelationshipToTeamLinkData";
import { TeamRelationshipsLinks } from "./TeamRelationshipsLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between a team and a team link
 */
export class RelationshipToTeamLinks {
  /**
   * Related team links
   */
  "data"?: Array<RelationshipToTeamLinkData>;
  /**
   * Links attributes.
   */
  "links"?: TeamRelationshipsLinks;

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
    data: {
      baseName: "data",
      type: "Array<RelationshipToTeamLinkData>",
    },
    links: {
      baseName: "links",
      type: "TeamRelationshipsLinks",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToTeamLinks.attributeTypeMap;
  }

  public constructor() {}
}
