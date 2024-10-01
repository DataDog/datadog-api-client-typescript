/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsApiHandleInfoResponseAttributes } from "./MicrosoftTeamsApiHandleInfoResponseAttributes";
import { MicrosoftTeamsApiHandleInfoType } from "./MicrosoftTeamsApiHandleInfoType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Handle data from a response.
 */
export class MicrosoftTeamsApiHandleInfoResponseData {
  /**
   * Handle attributes.
   */
  "attributes"?: MicrosoftTeamsApiHandleInfoResponseAttributes;
  /**
   * The ID of the handle.
   */
  "id"?: string;
  /**
   * Handle resource type.
   */
  "type"?: MicrosoftTeamsApiHandleInfoType;

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
      type: "MicrosoftTeamsApiHandleInfoResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsApiHandleInfoType",
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
    return MicrosoftTeamsApiHandleInfoResponseData.attributeTypeMap;
  }

  public constructor() {}
}
