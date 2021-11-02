/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentType } from "./IncidentType";
import { IncidentUpdateAttributes } from "./IncidentUpdateAttributes";
import { IncidentUpdateRelationships } from "./IncidentUpdateRelationships";

export class IncidentUpdateData {
  "attributes"?: IncidentUpdateAttributes;
  /**
   * The team's ID.
   */
  "id": string;
  "relationships"?: IncidentUpdateRelationships;
  "type": IncidentType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    attributes: {
      baseName: "attributes",
      type: "IncidentUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentUpdateRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return IncidentUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
