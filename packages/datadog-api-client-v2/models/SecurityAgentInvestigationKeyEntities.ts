/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationEntity } from "./SecurityAgentInvestigationEntity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The entities the investigation found, by role.
 */
export class SecurityAgentInvestigationKeyEntities {
  /**
   * Entities that performed the activity.
   */
  "actors": Array<SecurityAgentInvestigationEntity>;
  /**
   * Entities the activity was aimed at.
   */
  "targets": Array<SecurityAgentInvestigationEntity>;

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
    actors: {
      baseName: "actors",
      type: "Array<SecurityAgentInvestigationEntity>",
      required: true,
    },
    targets: {
      baseName: "targets",
      type: "Array<SecurityAgentInvestigationEntity>",
      required: true,
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
    return SecurityAgentInvestigationKeyEntities.attributeTypeMap;
  }

  public constructor() {}
}
