/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAutomationDataAttributesResponse } from "./IncidentAutomationDataAttributesResponse";
import { IncidentAutomationDataType } from "./IncidentAutomationDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Automation data in a response.
 */
export class IncidentAutomationDataDataResponse {
  /**
   * Attributes of incident automation data.
   */
  "attributes": IncidentAutomationDataAttributesResponse;
  /**
   * The automation data identifier.
   */
  "id": string;
  /**
   * Incident automation data resource type.
   */
  "type": IncidentAutomationDataType;

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
      type: "IncidentAutomationDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentAutomationDataType",
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
    return IncidentAutomationDataDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
