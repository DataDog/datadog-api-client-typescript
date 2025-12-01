/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyLink } from "./TeamHierarchyLink";
import { TeamHierarchyLinkTeam } from "./TeamHierarchyLinkTeam";
import { TeamsHierarchyLinksResponseLinks } from "./TeamsHierarchyLinksResponseLinks";
import { TeamsHierarchyLinksResponseMeta } from "./TeamsHierarchyLinksResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team hierarchy links response
 */
export class TeamHierarchyLinksResponse {
  /**
   * Team hierarchy links response data
   */
  "data"?: Array<TeamHierarchyLink>;
  /**
   * Included teams
   */
  "included"?: Array<TeamHierarchyLinkTeam>;
  /**
   * When querying team hierarchy links, a set of links for navigation between different pages is included
   */
  "links"?: TeamsHierarchyLinksResponseLinks;
  /**
   * Metadata that is included in the response when querying the team hierarchy links
   */
  "meta"?: TeamsHierarchyLinksResponseMeta;

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
      type: "Array<TeamHierarchyLink>",
    },
    included: {
      baseName: "included",
      type: "Array<TeamHierarchyLinkTeam>",
    },
    links: {
      baseName: "links",
      type: "TeamsHierarchyLinksResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "TeamsHierarchyLinksResponseMeta",
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
    return TeamHierarchyLinksResponse.attributeTypeMap;
  }

  public constructor() {}
}
