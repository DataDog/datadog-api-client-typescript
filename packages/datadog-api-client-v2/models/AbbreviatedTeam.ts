/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AbbreviatedTeamAttributes } from "./AbbreviatedTeamAttributes";
import { AbbreviatedTeamType } from "./AbbreviatedTeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `AbbreviatedTeam` object.
 */
export class AbbreviatedTeam {
  /**
   * The definition of `AbbreviatedTeamAttributes` object.
   */
  "attributes": AbbreviatedTeamAttributes;
  /**
   * ID of the team
   */
  "id"?: string;
  /**
   * The definition of `AbbreviatedTeamType` object.
   */
  "type": AbbreviatedTeamType;

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
      type: "AbbreviatedTeamAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AbbreviatedTeamType",
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
    return AbbreviatedTeam.attributeTypeMap;
  }

  public constructor() {}
}
