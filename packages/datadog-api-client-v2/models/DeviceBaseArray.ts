/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeviceBaseArrayLinks } from "./DeviceBaseArrayLinks";
import { DeviceBaseArrayMeta } from "./DeviceBaseArrayMeta";
import { DeviceBaseData } from "./DeviceBaseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response body for the list devices endpoint.
 */
export class DeviceBaseArray {
  /**
   * List of devices matching the request.
   */
  "data": Array<DeviceBaseData>;
  /**
   * Links related to the current page of devices.
   */
  "links"?: DeviceBaseArrayLinks;
  /**
   * Metadata about the list devices response.
   */
  "meta"?: DeviceBaseArrayMeta;

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
      type: "Array<DeviceBaseData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "DeviceBaseArrayLinks",
    },
    meta: {
      baseName: "meta",
      type: "DeviceBaseArrayMeta",
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
    return DeviceBaseArray.attributeTypeMap;
  }

  public constructor() {}
}
