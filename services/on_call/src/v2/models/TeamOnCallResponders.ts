import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamOnCallRespondersData } from "./TeamOnCallRespondersData";
import { TeamOnCallRespondersIncluded } from "./TeamOnCallRespondersIncluded";

/**
 * Root object representing a team's on-call responder configuration.
 */
export class TeamOnCallResponders {
  /**
   * Defines the main on-call responder object for a team, including relationships and metadata.
   */
  "data"?: TeamOnCallRespondersData;
  /**
   * The `TeamOnCallResponders` `included`.
   */
  "included"?: Array<TeamOnCallRespondersIncluded>;
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
      type: "TeamOnCallRespondersData",
    },
    included: {
      baseName: "included",
      type: "Array<TeamOnCallRespondersIncluded>",
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
    return TeamOnCallResponders.attributeTypeMap;
  }

  public constructor() {}
}
