/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamLinkAttributes } from "./TeamLinkAttributes";
import { TeamLinkType } from "./TeamLinkType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team link create
 */
export class TeamLinkCreate {
  /**
   * Team link attributes
   */
  "attributes": TeamLinkAttributes;
  /**
   * Team link type
   */
  "type": TeamLinkType;

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
      type: "TeamLinkAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamLinkType",
      required: true,
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
    return TeamLinkCreate.attributeTypeMap;
  }

  public constructor() {}
}
