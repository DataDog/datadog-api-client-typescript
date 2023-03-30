/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Team } from "./Team";
import { TeamIncluded } from "./TeamIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with multiple teams
 */
export class TeamsResponse {
  /**
   * Teams response data
   */
  "data"?: Array<Team>;
  /**
   * Resources related to the team
   */
  "included"?: Array<TeamIncluded>;

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
      type: "Array<Team>",
    },
    included: {
      baseName: "included",
      type: "Array<TeamIncluded>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamsResponse.attributeTypeMap;
  }

  public constructor() {}
}
