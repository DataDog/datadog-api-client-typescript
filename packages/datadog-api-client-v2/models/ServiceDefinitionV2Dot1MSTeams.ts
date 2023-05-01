/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Dot1MSTeamsType } from "./ServiceDefinitionV2Dot1MSTeamsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service owner's Microsoft Teams.
 */
export class ServiceDefinitionV2Dot1MSTeams {
  /**
   * Contact value.
   */
  "contact": string;
  /**
   * Contact Microsoft Teams.
   */
  "name"?: string;
  /**
   * Contact type.
   */
  "type": ServiceDefinitionV2Dot1MSTeamsType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contact: {
      baseName: "contact",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ServiceDefinitionV2Dot1MSTeamsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Dot1MSTeams.attributeTypeMap;
  }

  public constructor() {}
}
