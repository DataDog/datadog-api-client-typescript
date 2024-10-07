/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsTenantBasedHandleResponseData } from "./MicrosoftTeamsTenantBasedHandleResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response of a tenant-based handle.
 */
export class MicrosoftTeamsTenantBasedHandleResponse {
  /**
   * Tenant-based handle data from a response.
   */
  "data": MicrosoftTeamsTenantBasedHandleResponseData;

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
    data: {
      baseName: "data",
      type: "MicrosoftTeamsTenantBasedHandleResponseData",
      required: true,
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
    return MicrosoftTeamsTenantBasedHandleResponse.attributeTypeMap;
  }

  public constructor() {}
}
