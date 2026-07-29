/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimestampOverrideDataAttributesResponse } from "./IncidentTimestampOverrideDataAttributesResponse";
import { IncidentTimestampOverrideRelationships } from "./IncidentTimestampOverrideRelationships";
import { IncidentTimestampOverrideType } from "./IncidentTimestampOverrideType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Timestamp override data in a response.
 */
export class IncidentTimestampOverrideDataResponse {
  /**
   * Attributes of a timestamp override in a response.
   */
  "attributes": IncidentTimestampOverrideDataAttributesResponse;
  /**
   * The timestamp override identifier.
   */
  "id": string;
  /**
   * Relationships for a timestamp override.
   */
  "relationships"?: IncidentTimestampOverrideRelationships;
  /**
   * Incident timestamp override resource type.
   */
  "type": IncidentTimestampOverrideType;

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
      type: "IncidentTimestampOverrideDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentTimestampOverrideRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentTimestampOverrideType",
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
    return IncidentTimestampOverrideDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
