/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentsTimestampOverridesType } from "./IncidentsTimestampOverridesType";
import { IncidentTimestampOverrideCreateAttributes } from "./IncidentTimestampOverrideCreateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an incident timestamp override.
 */
export class IncidentTimestampOverrideCreateData {
  /**
   * Attributes for creating an incident timestamp override.
   */
  "attributes": IncidentTimestampOverrideCreateAttributes;
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
      type: "IncidentTimestampOverrideCreateAttributes",
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
    return IncidentTimestampOverrideCreateData.attributeTypeMap;
  }

  public constructor() {}
}
