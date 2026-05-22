/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentStatuspageIncidentDataAttributesRequest } from "./IncidentStatuspageIncidentDataAttributesRequest";
import { IncidentStatuspageIncidentType } from "./IncidentStatuspageIncidentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Statuspage incident data for a request.
 */
export class IncidentStatuspageIncidentDataRequest {
  /**
   * Attributes for creating or updating a Statuspage incident.
   */
  "attributes": IncidentStatuspageIncidentDataAttributesRequest;
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
      type: "IncidentStatuspageIncidentDataAttributesRequest",
      required: true,
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
    return IncidentStatuspageIncidentDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
