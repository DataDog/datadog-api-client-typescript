/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentIntegrationMetadataAttributes } from "./IncidentIntegrationMetadataAttributes";
import { IncidentIntegrationMetadataType } from "./IncidentIntegrationMetadataType";
import { IncidentIntegrationRelationships } from "./IncidentIntegrationRelationships";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Incident integration metadata from a response.
*/
export class IncidentIntegrationMetadataResponseData {
  /**
   * Incident integration metadata's attributes for a create request.
  */
  "attributes"?: IncidentIntegrationMetadataAttributes;
  /**
   * The incident integration metadata's ID.
  */
  "id": string;
  /**
   * The incident's integration relationships from a response.
  */
  "relationships"?: IncidentIntegrationRelationships;
  /**
   * Integration metadata resource type.
  */
  "type": IncidentIntegrationMetadataType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "IncidentIntegrationMetadataAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "relationships": {
      "baseName": "relationships",
      "type": "IncidentIntegrationRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "IncidentIntegrationMetadataType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return IncidentIntegrationMetadataResponseData.attributeTypeMap;

  }

  public constructor() {











  }
}









