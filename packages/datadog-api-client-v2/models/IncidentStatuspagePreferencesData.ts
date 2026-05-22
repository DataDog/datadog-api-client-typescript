/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentStatuspagePreferencesDataAttributes } from "./IncidentStatuspagePreferencesDataAttributes";
import { IncidentStatuspagePreferencesType } from "./IncidentStatuspagePreferencesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Subscription preferences data.
 */
export class IncidentStatuspagePreferencesData {
  /**
   * Attributes of subscription preferences.
   */
  "attributes": IncidentStatuspagePreferencesDataAttributes;
  /**
   * The preferences identifier.
   */
  "id": string;
  /**
   * Subscription preferences resource type.
   */
  "type": IncidentStatuspagePreferencesType;

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
      type: "IncidentStatuspagePreferencesDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentStatuspagePreferencesType",
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
    return IncidentStatuspagePreferencesData.attributeTypeMap;
  }

  public constructor() {}
}
