/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentZoomConfigurationDataAttributesRequest } from "./IncidentZoomConfigurationDataAttributesRequest";
import { IncidentZoomConfigurationType } from "./IncidentZoomConfigurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Zoom configuration data for a request.
 */
export class IncidentZoomConfigurationDataRequest {
  /**
   * Attributes for creating or updating a Zoom configuration.
   */
  "attributes": IncidentZoomConfigurationDataAttributesRequest;
  /**
   * Zoom configuration resource type.
   */
  "type": IncidentZoomConfigurationType;

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
      type: "IncidentZoomConfigurationDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentZoomConfigurationType",
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
    return IncidentZoomConfigurationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
