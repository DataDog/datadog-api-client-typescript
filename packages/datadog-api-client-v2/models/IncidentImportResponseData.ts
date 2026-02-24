/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImportResponseAttributes } from "./IncidentImportResponseAttributes";
import { IncidentImportResponseRelationships } from "./IncidentImportResponseRelationships";
import { IncidentType } from "./IncidentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident data from an import response.
 */
export class IncidentImportResponseData {
  /**
   * The incident's attributes from an import response.
   */
  "attributes"?: IncidentImportResponseAttributes;
  /**
   * The incident's ID.
   */
  "id": string;
  /**
   * The incident's relationships from an import response.
   */
  "relationships"?: IncidentImportResponseRelationships;
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
      type: "IncidentImportResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentImportResponseRelationships",
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
    return IncidentImportResponseData.attributeTypeMap;
  }

  public constructor() {}
}
