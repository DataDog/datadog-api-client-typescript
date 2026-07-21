/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentGoogleChatConfigurationPatchDataAttributesRequest } from "./IncidentGoogleChatConfigurationPatchDataAttributesRequest";
import { IncidentGoogleChatConfigurationType } from "./IncidentGoogleChatConfigurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Google Chat configuration data in a patch request.
 */
export class IncidentGoogleChatConfigurationPatchDataRequest {
  /**
   * Attributes for patching a Google Chat configuration. All fields are optional.
   */
  "attributes"?: IncidentGoogleChatConfigurationPatchDataAttributesRequest;
  /**
   * The configuration identifier.
   */
  "id": string;
  /**
   * Google Chat configuration resource type.
   */
  "type": IncidentGoogleChatConfigurationType;

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
      type: "IncidentGoogleChatConfigurationPatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentGoogleChatConfigurationType",
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
    return IncidentGoogleChatConfigurationPatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
