/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentHandleAttributesResponse } from "./IncidentHandleAttributesResponse";
import { IncidentHandleRelationships } from "./IncidentHandleRelationships";
import { IncidentHandleType } from "./IncidentHandleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class IncidentHandleDataResponse {
  /**
   * Incident handle attributes for responses
   */
  "attributes": IncidentHandleAttributesResponse;
  /**
   * The ID of the incident handle
   */
  "id": string;
  "relationships"?: IncidentHandleRelationships;
  /**
   * Incident handle resource type
   */
  "type": IncidentHandleType;

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
      type: "IncidentHandleAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentHandleRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentHandleType",
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
    return IncidentHandleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
