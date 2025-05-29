/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamOnCallRespondersDataRelationshipsEscalations } from "./TeamOnCallRespondersDataRelationshipsEscalations";
import { TeamOnCallRespondersDataRelationshipsResponders } from "./TeamOnCallRespondersDataRelationshipsResponders";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `TeamOnCallRespondersDataRelationships` object.
 */
export class TeamOnCallRespondersDataRelationships {
  /**
   * The definition of `TeamOnCallRespondersDataRelationshipsEscalations` object.
   */
  "escalations"?: TeamOnCallRespondersDataRelationshipsEscalations;
  /**
   * The definition of `TeamOnCallRespondersDataRelationshipsResponders` object.
   */
  "responders"?: TeamOnCallRespondersDataRelationshipsResponders;

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
    escalations: {
      baseName: "escalations",
      type: "TeamOnCallRespondersDataRelationshipsEscalations",
    },
    responders: {
      baseName: "responders",
      type: "TeamOnCallRespondersDataRelationshipsResponders",
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
    return TeamOnCallRespondersDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
