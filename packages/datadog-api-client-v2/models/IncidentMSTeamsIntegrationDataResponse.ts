/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentMicrosoftTeamsIntegrationType } from "./IncidentMicrosoftTeamsIntegrationType";
import { IncidentMSTeamsIntegrationDataAttributes } from "./IncidentMSTeamsIntegrationDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Microsoft Teams integration data in a response.
 */
export class IncidentMSTeamsIntegrationDataResponse {
  /**
   * Attributes of a Microsoft Teams integration metadata.
   */
  "attributes": IncidentMSTeamsIntegrationDataAttributes;
  /**
   * The integration identifier.
   */
  "id": string;
  /**
   * Incident integration resource type.
   */
  "type": IncidentMicrosoftTeamsIntegrationType;

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
      type: "IncidentMSTeamsIntegrationDataAttributes",
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
      type: "IncidentMicrosoftTeamsIntegrationType",
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
    return IncidentMSTeamsIntegrationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
