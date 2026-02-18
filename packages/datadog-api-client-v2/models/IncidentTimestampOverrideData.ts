/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentsTimestampOverridesType } from "./IncidentsTimestampOverridesType";
import { IncidentTimestampOverrideAttributes } from "./IncidentTimestampOverrideAttributes";
import { IncidentTimestampOverrideRelationships } from "./IncidentTimestampOverrideRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for a single incident timestamp override.
 */
export class IncidentTimestampOverrideData {
  /**
   * Attributes of an incident timestamp override.
   */
  "attributes": IncidentTimestampOverrideAttributes;
  /**
   * The UUID of the timestamp override.
   */
  "id": string;
  /**
   * Relationships for incident timestamp override.
   */
  "relationships": IncidentTimestampOverrideRelationships;
  /**
   * The JSON:API type for timestamp overrides.
   */
  "type": IncidentsTimestampOverridesType;

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
      type: "IncidentTimestampOverrideAttributes",
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentsTimestampOverridesType",
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
    return IncidentTimestampOverrideData.attributeTypeMap;
  }

  public constructor() {}
}
