/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Channel attributes.
 */
export class MicrosoftTeamsChannelInfoResponseAttributes {
  /**
   * Indicates if this is the primary channel.
   */
  "isPrimary"?: boolean;
  /**
   * Team id.
   */
  "teamId"?: string;
  /**
   * Tenant id.
   */
  "tenantId"?: string;

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
    isPrimary: {
      baseName: "is_primary",
      type: "boolean",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MicrosoftTeamsChannelInfoResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
