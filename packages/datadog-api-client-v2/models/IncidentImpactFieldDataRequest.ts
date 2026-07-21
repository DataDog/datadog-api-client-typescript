/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImpactFieldDataAttributesRequest } from "./IncidentImpactFieldDataAttributesRequest";
import { IncidentImpactFieldRelationshipsRequest } from "./IncidentImpactFieldRelationshipsRequest";
import { IncidentImpactFieldType } from "./IncidentImpactFieldType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Impact field data in a create request.
 */
export class IncidentImpactFieldDataRequest {
  /**
   * Attributes for creating an impact field.
   */
  "attributes": IncidentImpactFieldDataAttributesRequest;
  /**
   * Relationships for an impact field create request.
   */
  "relationships": IncidentImpactFieldRelationshipsRequest;
  /**
   * Impact field resource type.
   */
  "type": IncidentImpactFieldType;

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
      type: "IncidentImpactFieldDataAttributesRequest",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentImpactFieldRelationshipsRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentImpactFieldType",
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
    return IncidentImpactFieldDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
