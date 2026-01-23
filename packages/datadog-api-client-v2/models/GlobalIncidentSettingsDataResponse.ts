/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GlobalIncidentSettingsAttributesResponse } from "./GlobalIncidentSettingsAttributesResponse";
import { GlobalIncidentSettingsType } from "./GlobalIncidentSettingsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class GlobalIncidentSettingsDataResponse {
  /**
   * Global incident settings attributes
   */
  "attributes": GlobalIncidentSettingsAttributesResponse;
  /**
   * The unique identifier for the global incident settings
   */
  "id": string;
  /**
   * Global incident settings resource type
   */
  "type": GlobalIncidentSettingsType;

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
      type: "GlobalIncidentSettingsAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GlobalIncidentSettingsType",
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
    return GlobalIncidentSettingsDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
