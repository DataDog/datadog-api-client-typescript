/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamOnCallRespondersDataRelationshipsEscalationsDataItems } from "./TeamOnCallRespondersDataRelationshipsEscalationsDataItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the escalation policy steps linked to the team's on-call configuration.
 */
export class TeamOnCallRespondersDataRelationshipsEscalations {
  /**
   * Array of escalation step references.
   */
  "data"?: Array<TeamOnCallRespondersDataRelationshipsEscalationsDataItems>;

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
      type: "Array<TeamOnCallRespondersDataRelationshipsEscalationsDataItems>",
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
    return TeamOnCallRespondersDataRelationshipsEscalations.attributeTypeMap;
  }

  public constructor() {}
}
