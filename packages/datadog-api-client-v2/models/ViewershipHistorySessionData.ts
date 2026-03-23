/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ViewershipHistorySessionDataAttributes } from "./ViewershipHistorySessionDataAttributes";
import { ViewershipHistorySessionDataType } from "./ViewershipHistorySessionDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object representing a session in the viewership history, including its identifier, type, and attributes.
 */
export class ViewershipHistorySessionData {
  /**
   * Attributes of a viewership history session entry, capturing when it was last watched and the associated event data.
   */
  "attributes"?: ViewershipHistorySessionDataAttributes;
  /**
   * Unique identifier of the RUM replay session.
   */
  "id"?: string;
  /**
   * Rum replay session resource type.
   */
  "type": ViewershipHistorySessionDataType;

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
      type: "ViewershipHistorySessionDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ViewershipHistorySessionDataType",
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
    return ViewershipHistorySessionData.attributeTypeMap;
  }

  public constructor() {}
}
