/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentType } from "./IncidentType";
import { IncidentUpdateAttributes } from "./IncidentUpdateAttributes";
import { IncidentUpdateRelationships } from "./IncidentUpdateRelationships";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Incident data for an update request.
 */
export class IncidentUpdateData {
  /**
   * The incident's attributes for an update request.
   */
  "attributes"?: IncidentUpdateAttributes;
  /**
   * The team's ID.
   */
  "id": string;
  /**
   * The incident's relationships for an update request.
   */
  "relationships"?: IncidentUpdateRelationships;
  /**
   * Incident resource type.
   */
  "type": IncidentType | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
