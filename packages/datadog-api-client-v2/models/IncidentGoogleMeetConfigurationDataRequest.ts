/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentGoogleMeetConfigurationDataAttributesRequest } from "./IncidentGoogleMeetConfigurationDataAttributesRequest";
import { IncidentGoogleMeetConfigurationRelationshipsRequest } from "./IncidentGoogleMeetConfigurationRelationshipsRequest";
import { IncidentGoogleMeetConfigurationType } from "./IncidentGoogleMeetConfigurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Google Meet configuration data in a create request.
 */
export class IncidentGoogleMeetConfigurationDataRequest {
  /**
   * Attributes for creating a Google Meet configuration.
   */
  "attributes": IncidentGoogleMeetConfigurationDataAttributesRequest;
  /**
   * Relationships for a Google Meet configuration create request.
   */
  "relationships": IncidentGoogleMeetConfigurationRelationshipsRequest;
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
      type: "IncidentGoogleMeetConfigurationDataAttributesRequest",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentGoogleMeetConfigurationRelationshipsRequest",
      required: true,
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
    return IncidentGoogleMeetConfigurationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
