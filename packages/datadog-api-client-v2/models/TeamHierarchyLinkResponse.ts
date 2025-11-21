/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyLink } from "./TeamHierarchyLink";
import { TeamHierarchyLinkTeam } from "./TeamHierarchyLinkTeam";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team hierarchy link response
 */
export class TeamHierarchyLinkResponse {
  /**
   * Team hierarchy link
   */
  "data"?: TeamHierarchyLink;
  /**
   * Included teams
   */
  "included"?: Array<TeamHierarchyLinkTeam>;

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
      type: "TeamHierarchyLink",
    },
    included: {
      baseName: "included",
      type: "Array<TeamHierarchyLinkTeam>",
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
    return TeamHierarchyLinkResponse.attributeTypeMap;
  }

  public constructor() {}
}
