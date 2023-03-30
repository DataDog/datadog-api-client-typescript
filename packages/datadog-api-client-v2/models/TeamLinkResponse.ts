/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamLink } from "./TeamLink";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team link response
 */
export class TeamLinkResponse {
  /**
   * Team link
   */
  "data"?: TeamLink;

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
      type: "TeamLink",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamLinkResponse.attributeTypeMap;
  }

  public constructor() {}
}
