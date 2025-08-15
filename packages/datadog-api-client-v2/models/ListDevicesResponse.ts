/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DevicesListData } from "./DevicesListData";
import { ListDevicesResponseMetadata } from "./ListDevicesResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List devices response.
 */
export class ListDevicesResponse {
  /**
   * The list devices response data.
   */
  "data"?: Array<DevicesListData>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ListDevicesResponseMetadata;

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
      type: "Array<DevicesListData>",
    },
    meta: {
      baseName: "meta",
      type: "ListDevicesResponseMetadata",
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
    return ListDevicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
