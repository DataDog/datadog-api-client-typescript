/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseAttributes } from "./IncidentResponseAttributes";
import { IncidentResponseRelationships } from "./IncidentResponseRelationships";
import { IncidentType } from "./IncidentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident data from a response.
 */
export class IncidentResponseData {
  /**
   * The incident's attributes from a response.
   */
  "attributes"?: IncidentResponseAttributes;
  /**
   * The incident's ID.
   */
  "id": string;
  /**
   * The incident's relationships from a response.
   */
  "relationships"?: IncidentResponseRelationships;
  /**
   * Incident resource type.
   */
  "type": IncidentType;

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
      type: "IncidentResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentResponseRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentType",
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
    return IncidentResponseData.attributeTypeMap;
  }

  public constructor() {}
}
