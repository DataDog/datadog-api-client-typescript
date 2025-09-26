/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImpactAttributes } from "./IncidentImpactAttributes";
import { IncidentImpactRelationships } from "./IncidentImpactRelationships";
import { IncidentImpactType } from "./IncidentImpactType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident impact data from a response.
 */
export class IncidentImpactResponseData {
  /**
   * The incident impact's attributes.
   */
  "attributes"?: IncidentImpactAttributes;
  /**
   * The incident impact's ID.
   */
  "id": string;
  /**
   * The incident impact's resource relationships.
   */
  "relationships"?: IncidentImpactRelationships;
  /**
   * Incident impact resource type.
   */
  "type": IncidentImpactType;

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
      type: "IncidentImpactAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentImpactRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentImpactType",
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
    return IncidentImpactResponseData.attributeTypeMap;
  }

  public constructor() {}
}
