/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImportRelationships } from "./IncidentImportRelationships";
import { IncidentImportRequestAttributes } from "./IncidentImportRequestAttributes";
import { IncidentType } from "./IncidentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident data for an import request.
 */
export class IncidentImportRequestData {
  /**
   * The incident's attributes for an import request.
   */
  "attributes": IncidentImportRequestAttributes;
  /**
   * The relationships for an incident import request.
   */
  "relationships"?: IncidentImportRelationships;
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
      type: "IncidentImportRequestAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentImportRelationships",
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
    return IncidentImportRequestData.attributeTypeMap;
  }

  public constructor() {}
}
