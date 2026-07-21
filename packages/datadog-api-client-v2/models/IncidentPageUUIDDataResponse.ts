/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentPageUUIDType } from "./IncidentPageUUIDType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Page UUID data in a response.
 */
export class IncidentPageUUIDDataResponse {
  /**
   * The UUID of the created page.
   */
  "id": string;
  /**
   * Resource type for a page UUID response.
   */
  "type": IncidentPageUUIDType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentPageUUIDType",
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
    return IncidentPageUUIDDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
