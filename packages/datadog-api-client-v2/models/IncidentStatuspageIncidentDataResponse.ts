/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentStatuspageIncidentDataAttributesResponse } from "./IncidentStatuspageIncidentDataAttributesResponse";
import { IncidentStatuspageIncidentType } from "./IncidentStatuspageIncidentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Statuspage incident data in a response.
 */
export class IncidentStatuspageIncidentDataResponse {
  /**
   * Attributes of a Statuspage incident integration.
   */
  "attributes": IncidentStatuspageIncidentDataAttributesResponse;
  /**
   * The integration identifier.
   */
  "id": string;
  /**
   * Statuspage incident integration resource type.
   */
  "type": IncidentStatuspageIncidentType;

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
      type: "IncidentStatuspageIncidentDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentStatuspageIncidentType",
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
    return IncidentStatuspageIncidentDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
