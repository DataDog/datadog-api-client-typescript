/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentGoogleMeetIntegrationDataAttributes } from "./IncidentGoogleMeetIntegrationDataAttributes";
import { IncidentGoogleMeetIntegrationType } from "./IncidentGoogleMeetIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Google Meet integration data in a response.
 */
export class IncidentGoogleMeetIntegrationDataResponse {
  /**
   * Attributes of a Google Meet integration metadata.
   */
  "attributes": IncidentGoogleMeetIntegrationDataAttributes;
  /**
   * The integration identifier.
   */
  "id": string;
  /**
   * Incident integration resource type.
   */
  "type": IncidentGoogleMeetIntegrationType;

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
      type: "IncidentGoogleMeetIntegrationDataAttributes",
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
      type: "IncidentGoogleMeetIntegrationType",
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
    return IncidentGoogleMeetIntegrationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
