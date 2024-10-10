/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityResponseIncludedRelatedIncidentAttributes } from "./EntityResponseIncludedRelatedIncidentAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Included incident.
 */
export class EntityResponseIncludedIncident {
  /**
   * Incident attributes.
   */
  "attributes"?: EntityResponseIncludedRelatedIncidentAttributes;
  /**
   * Incident ID.
   */
  "id"?: string;
  /**
   * Incident description.
   */
  "type"?: string;

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
      type: "EntityResponseIncludedRelatedIncidentAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return EntityResponseIncludedIncident.attributeTypeMap;
  }

  public constructor() {}
}
