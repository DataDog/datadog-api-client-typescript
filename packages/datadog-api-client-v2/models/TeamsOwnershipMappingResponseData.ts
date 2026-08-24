/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamsOwnershipMappingResponseAttributes } from "./TeamsOwnershipMappingResponseAttributes";
import { TeamsOwnershipMappingType } from "./TeamsOwnershipMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API data envelope for a teams ownership mapping.
 */
export class TeamsOwnershipMappingResponseData {
  /**
   * The attributes of a teams ownership mapping.
   */
  "attributes": TeamsOwnershipMappingResponseAttributes;
  /**
   * The unique identifier of the teams ownership mapping.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be teams_ownership_mappings.
   */
  "type": TeamsOwnershipMappingType;

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
      type: "TeamsOwnershipMappingResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamsOwnershipMappingType",
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
    return TeamsOwnershipMappingResponseData.attributeTypeMap;
  }

  public constructor() {}
}
