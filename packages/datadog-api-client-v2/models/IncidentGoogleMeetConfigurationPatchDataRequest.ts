/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentGoogleMeetConfigurationPatchDataAttributesRequest } from "./IncidentGoogleMeetConfigurationPatchDataAttributesRequest";
import { IncidentGoogleMeetConfigurationType } from "./IncidentGoogleMeetConfigurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Google Meet configuration data in a patch request.
 */
export class IncidentGoogleMeetConfigurationPatchDataRequest {
  /**
   * Attributes for patching a Google Meet configuration. All fields are optional.
   */
  "attributes"?: IncidentGoogleMeetConfigurationPatchDataAttributesRequest;
  /**
   * The configuration identifier.
   */
  "id": string;
  /**
   * Google Meet configuration resource type.
   */
  "type": IncidentGoogleMeetConfigurationType;

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
      type: "IncidentGoogleMeetConfigurationPatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentGoogleMeetConfigurationType",
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
    return IncidentGoogleMeetConfigurationPatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
