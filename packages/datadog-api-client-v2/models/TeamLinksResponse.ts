/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamLink } from "./TeamLink";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team links response
 */
export class TeamLinksResponse {
  /**
   * Team links response data
   */
  "data"?: Array<TeamLink>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "Array<TeamLink>",
    },
  };
}
