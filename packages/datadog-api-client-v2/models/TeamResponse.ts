/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Team } from "./Team";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a team
 */
export class TeamResponse {
  /**
   * A team
   */
  "data"?: Team;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "Team",
    },
  };
}
