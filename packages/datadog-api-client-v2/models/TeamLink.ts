/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamLinkAttributes } from "./TeamLinkAttributes";
import { TeamLinkType } from "./TeamLinkType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team link
 */
export class TeamLink {
  /**
   * Team link attributes
   */
  "attributes": TeamLinkAttributes;
  /**
   * The team link's identifier
   */
  "id": string;
  /**
   * Team link type
   */
  "type": TeamLinkType;

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
      type: "TeamLinkAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamLinkType",
      required: true,
    },
  };
}
